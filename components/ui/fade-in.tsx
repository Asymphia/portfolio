"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type FadeInProps = {
    children: ReactNode
    className?: string
    start?: string
    end?: string
}

const FadeIn = ({ children, className = "", start = "top 95%", end = "top 60%" }: FadeInProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current!
        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.fromTo(
                element,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start,
                        end,
                        scrub: 0.8,
                        refreshPriority: -1,
                    },
                }
            )
        })

        return () => mm.revert()
    }, [start, end])

    return (
        <div ref={ ref } className={ className }>
            { children }
        </div>
    )
}

export default FadeIn