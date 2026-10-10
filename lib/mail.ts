import type { ContactValues } from "@/lib/contact"

export const sendContactMail = async (values: ContactValues) => {
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO ?? "hello@juliakawa.dev"
    const from = process.env.CONTACT_FROM ?? "Julia Kawa Website <hello@juliakawa.dev>"

    if (!apiKey) {
        return false
    }

    const text = [
        `Name: ${ values.name }`,
        `E-mail: ${ values.email }`,
        `Company: ${ values.company }`,
        `Role: ${ values.role.join(", ") }`,
        `Link: ${ values.link || "-" }`,
        "",
        "Message:",
        values.message || "-",
    ].join("\n")

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${ apiKey }`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: values.email,
                subject: `Portfolio: ${ values.name }, ${ values.company }`.slice(0, 150),
                text,
            }),
            signal: AbortSignal.timeout(10_000),
        })

        if (!response.ok) {
            console.error("Resend error", response.status, await response.text())

            return false
        }

        return true
    } catch (error) {
        return false
    }
}