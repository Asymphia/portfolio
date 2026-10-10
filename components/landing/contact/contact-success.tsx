"use client"

import { useEffect, useRef } from "react"
import { CheckIcon } from "@heroicons/react/16/solid"

const ContactSuccess = ({ message }: { message: string }) => {
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        rootRef.current?.focus({ preventScroll: true })
    }, [])

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 md:gap-4">
                    <span data-reveal="item" className="flex size-6 md:size-8 items-center justify-center rounded-full bg-black text-white">
                        <CheckIcon className="size-3 md:size-4 stroke-2" />
                    </span>

                <h3 data-reveal="title" className="text-3xl/12 md:text-4xl/14">
                    Message sent!
                </h3>
            </div>

            <p data-reveal="text">
                { message }
            </p>
        </div>
    )
}

export default ContactSuccess