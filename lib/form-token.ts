import { createHmac, timingSafeEqual } from "node:crypto"

const getSecret = () => {
    const secret = process.env.FROM_SECRET

    if (secret) {
        return secret
    }

    if (process.env.NODE_ENV !== "production") {
        return "dev-only-secret"
    }

    throw new Error("Secret is not set")
}

const sign = (issuedAt: string) => {
    return createHmac("sha256", getSecret()).update(issuedAt).digest("base64url")
}

export const createFormToken = () => {
    const issuedAt = String(Date.now())
    return `${ issuedAt }.${ sign(issuedAt) }`
}

export type TokenCheck = "ok" | "invalid" | "too-fast" | "expired"

export const checkFormToken = (token: unknown): TokenCheck => {
    if (typeof token !== "string") {
        return "invalid"
    }

    const [issuedAt, signature] = token.split(".")

    if (!issuedAt || !signature || !/^\d{10,15}$/.test(issuedAt)) {
        return "invalid"
    }

    const expected = Buffer.from(sign(issuedAt))
    const given = Buffer.from(signature)

    if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
        return "invalid"
    }

    const age = Date.now() - Number(issuedAt)

    if (age < 3000) {
        return "too-fast"
    }

    if (age > 4 * 60 * 60 * 1000) {
        return "expired"
    }

    return "ok"
}