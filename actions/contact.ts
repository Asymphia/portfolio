"use server"

import { validateContact, type ContactState, ContactValues } from "@/lib/contact"
import { checkFormToken, createFormToken } from "@/lib/form-token"
import { headers } from "next/headers"
import { rateLimit } from "@/lib/rate-limit"
import { verifyTurnstile } from "@/lib/turnstile"
import { sendContactMail } from "@/lib/mail"

export const issueFormToken = async () => createFormToken()

const getIp = async () => {
    const list = await headers()

    return list.get("cf-connecting-ip")
        ?? list.get("x-forwarded-for")?.split(",")[0]?.trim()
        ?? list.get("x-real-ip")
        ?? "unknown"
}

const fail = (formError: string, values: ContactValues): ContactState => ({
    status: "error",
    errors: {},
    values,
    formError
})

const success = (values: ContactValues): ContactState => {
    const firstName = values.name.split(" ")[0]?.slice(0, 40)

    return {
        status: "success",
        errors: {},
        values: { name: "", email: "", company: "", link: "", role: [], message: "" },
        message: `Thanks ${ firstName ? `, ${ firstName }` : "" }! I'll get back to you within few working days.`,
    }
}

export const submitContact = async (_prevState: ContactState, formData: FormData): Promise<ContactState> => {
    const { values, errors } = validateContact(formData)
    const ip = await getIp()

    if (formData.get("website")) {
        return success(values)
    }

    if (!rateLimit(`attempt:${ ip }`, 20, 10 * 60000)) {
        return fail("Too many attempts. Please wait a few minutes and try again.", values)
    }

    const token = checkFormToken(formData.get("token"))

    if (token !== "ok") {
        return fail(
            token === "too-fast" ? "That was quick! Give it a second and try again." : "Your session expired. Please try again.",
            values
        )
    }

    if (Object.keys(errors).length > 0) {
        return { status: "error", errors, values }
    }

    if (!await verifyTurnstile(formData.get("cf-turnstile-response"), ip)) {
        return fail(
            "Couldn't verify that you're human. Please try again.",
            values
        )
    }

    if (!rateLimit(`send:${ ip }`, 3, 60 * 60000) || !rateLimit("send:global", 20, 60 * 60000)) {
        return fail("Too many messages right now. Please try again later.", values)
    }

    if (!await sendContactMail(values)) {
        return fail("Something went wrong. Please try again later.", values)
    }

    return success(values)
}