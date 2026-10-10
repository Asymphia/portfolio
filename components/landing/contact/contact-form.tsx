"use client"

import Input from "@/components/ui/input"
import Select from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import SubmitButton from "@/components/landing/contact/submit-button"
import { FormEvent, startTransition, useActionState, useCallback, useEffect, useRef, useState } from "react"
import { issueFormToken, submitContact } from "@/actions/contact"
import { initialContactState, ROLES } from "@/lib/contact"
import Link from "next/link"
import RollingText from "@/components/ui/rolling-text"
import Script from "next/script"
import ContactSuccess from "@/components/landing/contact/contact-success"
import gsap from "gsap"

declare global {
    interface Window {
        turnstile?: {
            render: (element: HTMLElement, options: Record<string, unknown>) => string
            reset: (widgetId?: string) => void
            remove: (widgetId: string) => void
        }
    }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const ContactForm = () => {
    const [state, formAction] = useActionState(submitContact, initialContactState)
    const [token, setToken] = useState("")
    const [sent, setSent] = useState(false)
    const [turnstileReady, setTurnstileReady] = useState(false)

    const wrapperRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const widgetRef = useRef<HTMLDivElement>(null)
    const widgetId = useRef<string | undefined>(undefined)

    const { errors, values } = state

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        startTransition(() => formAction(data))
    }

    useEffect(() => {
        issueFormToken().then(setToken).catch(() => {})
    }, [])

    useEffect(() => {
        if (window.turnstile) {
            setTurnstileReady(true)
        }
    }, [])

    useEffect(() => {
        if (!SITE_KEY || sent || !turnstileReady || !widgetRef.current || !window.turnstile) {
            return
        }

        const id = window.turnstile.render(widgetRef.current, {
            sitekey: SITE_KEY,
            appearance: "interaction-only",
            theme: "light",
        })

        widgetId.current = id

        return () => {
            window.turnstile?.remove(id)
            widgetId.current = undefined
        }
    }, [turnstileReady, sent])

    useEffect(() => {
        if (state.status === "error") {
            formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus()
        }
    }, [state])

    useEffect(() => {
        if (state.status !== "success" || sent) {
            return
        }

        const wrapper = wrapperRef.current!

        gsap.set(wrapper, { height: wrapper.offsetHeight, overflow: "hidden" })

        gsap.to(formRef.current, {
            opacity: 0,
            y: -12,
            duration: 0.6,
            ease: "power3.inOut",
            onComplete: () => setSent(true),
        })
    }, [state.status, sent])

    useEffect(() => {
        if (!sent) {
            return
        }

        const wrapper = wrapperRef.current!
        const from = wrapper.offsetHeight

        gsap.set(wrapper, { height: "auto" })

        const to = wrapper.offsetHeight

        gsap.fromTo(wrapper, { height: from }, {
            height: to,
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => { gsap.set(wrapper, { clearProps: "height,overflow" }) },
        })
    }, [sent])

    return (
        <div ref={ wrapperRef }>
            {
                SITE_KEY && (
                    <Script
                        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                        strategy="afterInteractive"
                        onReady={ () => setTurnstileReady(true) }
                    />
                )
            }

            {
                sent ? (
                    <ContactSuccess message={ state.message ?? "" } />
                ) : (
                    <form ref={ formRef } onSubmit={ onSubmit } noValidate className="relative grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 lg:gap-5">
                        <div className="absolute left-[-9999px] h-px w-px overflow-hidden">
                            <label>
                                Website
                                <input type="text" name="website" tabIndex={ -1 } autoComplete="off" />
                            </label>
                        </div>

                        <input type="hidden" name="token" value={ token } />

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

                        <p className="sm:col-span-2 text-sm">
                            By submitting this form, you agree to {" "}

                            <Link href="/privacy-policy" className="transition-all hover:opacity-80 active:opacity-60">
                                <RollingText>
                                    <span className="underline underline-offset-2">
                                        Privacy Policy
                                    </span>
                                </RollingText>
                            </Link>
                        </p>

                        {
                            state.formError && (
                                <p role="alert" className="sm:col-span-2 text-sm text-error">
                                    { state.formError }
                                </p>
                            )
                        }

                        <div className="sm:col-span-2 flex items-center justify-end">
                            <SubmitButton />
                        </div>

                        <div ref={ widgetRef } className="sm:col-span-2 empty:hidden" />
                    </form>
                )
            }
        </div>
    )
}

export default ContactForm