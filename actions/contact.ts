"use server"

import { emptyValues, validateContact, type ContactState } from "@/lib/contact"

export const submitContact = async (_prevState: ContactState, formData: FormData): Promise<ContactState> => {
    const { values, errors } = validateContact(formData)

    if (Object.keys(errors).length > 0) {
        return { status: "error", errors, values }
    }

    return {
        status: "success",
        errors: {},
        values: emptyValues,
        message: "Message sent! I'll get back to you soon."
    }
}