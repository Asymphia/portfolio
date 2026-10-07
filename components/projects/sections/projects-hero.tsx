"use client"

import Image from "next/image"
import heroImg from "@/assets/hero-image-projects.jpg"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = "expo.out"

const ProjectsHero = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null)
    const frameRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const h1 = h1Ref.current!
        const frame = frameRef.current!
        const words = h1.querySelectorAll<HTMLElement>("[data-split]")

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(h1, { visibility: "visible" })
            return
        }

        let cancelled = false
        const ctx = gsap.context(() => {}, h1)

        document.fonts.ready.then(() => {
            if (cancelled) {
                return
            }

            ctx.add(() => {
                SplitText.create(words, {
                    type: "lines,chars",
                    mask: "lines",
                    autoSplit: true,
                    onSplit: self => gsap.from(self.chars, {
                        yPercent: 110,
                        duration: 1.2,
                        stagger: 0.04,
                        ease: EASE,
                    }),
                })

                gsap.set(h1, { visibility: "visible" })

                gsap.from(frame, {
                    width: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    duration: 1.8,
                    delay: 0.7,
                    ease: "expo.inOut",
                    clearProps: "width,marginLeft,marginRight",
                })

                gsap.to(h1, {
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: h1,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.8,
                    },
                })
            })
        })

        return () => {
            cancelled = true
            ctx.revert()
        }
    }, [])

    return (
        <h1 ref={ h1Ref } className="invisible text-display-md flex items-center justify-center pt-50">
            <span data-split>Ideas</span>

            <span ref={ frameRef } className="mx-4 flex justify-center overflow-hidden rounded-sm">
                <Image
                    src={ heroImg }
                    alt="Computer workstation"
                    priority
                    className="max-w-62 shrink-0"
                />
            </span>

            <span data-split>made real</span>
        </h1>
    )
}

export default ProjectsHero