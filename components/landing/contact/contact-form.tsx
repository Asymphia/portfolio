"use client"

import Input from "@/components/ui/input"
import Select from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import SubmitButton from "@/components/landing/contact/submit-button"
import { useActionState, useEffect, useRef } from "react"
import { submitContact } from "@/actions/contact"
import { initialContactState, ROLES } from "@/lib/contact"
import Link from "next/link";
import RollingText from "@/components/ui/rolling-text";

const ContactForm = () => {
    const [state, action] = useActionState(submitContact, initialContactState)
    const formRef = useRef<HTMLFormElement>(null)
    const { errors, values } = state

    useEffect(() => {
        if (state.status !== "error") {
            return
        }

        formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus()
    }, [state])

    return (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 lg:gap-5" ref={ formRef } action={ action } noValidate>
            <Input
                name="name"
                type="text"
                placeholder="Jan Kowalski"
                label="Name"
                defaultValue={ values.name }
                error={ errors.name }
            />

            <Input
                name="email"
                type="email"
                placeholder="jan@company.com"
                label="E-mail"
                defaultValue={ values.email }
                error={ errors.email }
            />

            <Input
                name="company"
                type="text"
                placeholder="Company"
                label="Company name"
                defaultValue={ values.company }
                error={ errors.company }
            />

            <Input
                name="link"
                type="url"
                placeholder="https://company.com"
                label="Link to the offer"
                required={ false }
                defaultValue={ values.link }
                error={ errors.link }
            />

            <Select
                name="role"
                label="Which role?"
                className="sm:col-span-2"
                options={ ROLES }
                defaultValue={ values.role }
                error={ errors.role }
            />

            <Textarea
                label="Message"
                name="message"
                className="sm:col-span-2"
                placeholder="The role, the team, the stack and how the hiring process works."
                required={ false }
                defaultValue={ values.message }
                error={ errors.message }
            />

            <p className="col-span-2 text-sm">
                By submitting this form, you agree to {" "}

                <Link href="/privacy-policy" className="transition-all hover:opacity-80 active:opacity-60">
                    <RollingText>
                        <span className="underline underline-offset-2">
                            Privacy Policy
                        </span>
                    </RollingText>
                </Link>
            </p>

            <div className="sm:col-span-2 flex items-center justify-between gap-6">
                <p className="text-sm">
                    { state.status === "success" && state.message }
                </p>

                <SubmitButton />
            </div>
        </form>
    )
}

export default ContactForm