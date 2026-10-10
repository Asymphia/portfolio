const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export const verifyTurnstile = async (token: FormDataEntryValue | null, ip: string) => {
    const secret = process.env.TURNSTILE_SECRET_KEY

    if (!secret) {
        if (process.env.NODE_ENV === "production") {
            return false
        }

        return true
    }

    if (typeof token !== "string" || !token || token.length > 2048) {
        return false
    }

    try {
        const body = new URLSearchParams({ secret, response: token })

        if (ip !== "unknown") {
            body.set("remoteip", ip)
        }

        const response = await fetch(VERIFY_URL, { method: "POST", body, signal: AbortSignal.timeout(5000) })
        const data = await response.json() as { success?: boolean }

        return data.success === true
    } catch (error) {
        return false
    }
}