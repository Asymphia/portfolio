export const ROLES = [
    "WordPress Page Builder",
    "Advanced WordPress",
    "React / Next.js",
    "UI/UX Designer",
    "Internship",
    "Other"
]

export type FieldName = "name" | "email" | "company" | "link" | "role" | "message"
export type FieldErrors = Partial<Record<FieldName, string>>

export type ContactValues = {
    name: string
    email: string
    company: string
    link: string
    role: string[]
    message: string
}

export type ContactState = {
    status: "idle" | "error" | "success"
    errors: FieldErrors
    values: ContactValues
    message?: string
    formError?: string
}

export const emptyValues: ContactValues = {
    name: "",
    email: "",
    company: "",
    link: "",
    role: [],
    message: "",
}

export const initialContactState: ContactState = {
    status: "idle",
    errors: {},
    values: emptyValues,
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const HAS_LINK = /https?:\/\/|www\./gi

export const MAX_MESSAGE = 500
const MAX_LINKS_IN_MESSAGE = 2

const countLinks = (value: string) => {
    return value.match(HAS_LINK)?.length ?? 0
}

const isValidLink = (value: string) => {
    try {
        const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${ value }`)

        return url.hostname.includes(".")
    } catch {
        return false
    }
}

const text = (data: FormData, key: string) => {
    const value = data.get(key)

    return typeof value === "string" ? value.trim() : ""
}

export const validateContact = (data: FormData) => {
    const values: ContactValues = {
        name: text(data, "name"),
        email: text(data, "email"),
        company: text(data, "company"),
        link: text(data, "link"),
        message: text(data, "message"),
        role: [...new Set(data.getAll("role").filter((value): value is string => typeof value === "string"))]
    }

    const errors: FieldErrors = {}

    if (!values.name) {
        errors.name = "Please enter your name."
    } else if (values.name.length < 2) {
        errors.name = "Name must be at least 2 characters long."
    } else if (values.name.length > 100) {
        errors.name = "Name cannot exceed 100 characters."
    } else if (countLinks(values.name) > 0) {
        errors.name = "Please enter just your name."
    }

    if (!values.email) {
        errors.email = "Please enter your email address."
    } else if (!EMAIL.test(values.email)) {
        errors.email = "Please enter a valid email address. Try something like jan@company.com."
    }

    if (!values.company) {
        errors.company = "Please enter your company name."
    } else if (values.company.length > 100) {
        errors.company = "Company name cannot exceed 100 characters."
    } else if (countLinks(values.company) > 0) {
        errors.company = "Please enter just the company name."
    }

    if (values.link && (values.link.length > 300 || !isValidLink(values.link))) {
        errors.link = "Please enter a valid URL. Try something like https://company.com."
    }

    if (values.role.length === 0) {
        errors.role = "Please select at least one role."
    } else if (values.role.length > ROLES.length || values.role.some(role => !ROLES.includes(role))) {
        errors.role = "Invalid role selected."
    }

    if (values.message.length > MAX_MESSAGE) {
        errors.message = `Message must be ${ MAX_MESSAGE } characters or fewer (${ values.message.length }/${ MAX_MESSAGE }).`
    } else if (countLinks(values.message) > MAX_LINKS_IN_MESSAGE) {
        errors.message = `Please include at most ${ MAX_LINKS_IN_MESSAGE } links in your message.`
    }

    return { values, errors }
}