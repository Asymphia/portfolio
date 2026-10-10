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
    const sectionRef = useRef<HTMLElement>(null)
    const h1Ref = useRef<HTMLHeadingElement>(null)
    const frameRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const section = sectionRef.current!
        const h1 = h1Ref.current!
        const frame = frameRef.current!
        const words = h1.querySelectorAll<HTMLElement>("[data-split]")

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(h1, { visibility: "visible" })
            return
        }

        let cancelled = false
        const ctx = gsap.context(() => {}, section)

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

                gsap.to(section, {
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.8
                    }
                })
            })
        })

        return () => {
            cancelled = true
            ctx.revert()
        }
    }, [])

    return (
        <section ref={ sectionRef } className="@container container flex justify-center pt-28 sm:pt-40 lg:pt-50">
            <h1 ref={ h1Ref } className="invisible flex flex-col items-center leading-[0.9] text-nowrap
                    text-[min(20cqw,9rem)] lg:flex-row lg:text-[min(12cqw,10rem)]"
            >
                <span className="flex items-center lg:contents">
                    <span data-split>
                        Ideas
                    </span>

                    <span ref={ frameRef } className="ml-[0.12em] flex justify-center overflow-hidden rounded-sm lg:mx-[0.08em]">
                        <Image
                            src={ heroImg }
                            alt="Computer workstation"
                            priority
                            sizes="(min-width: 1024px) 200px, 100px"
                            className="h-auto w-[1.2em] max-w-none shrink-0"
                        />
                    </span>
                </span>

                <span data-split>
                    made real
                </span>
            </h1>
        </section>
    )
}

export default ProjectsHero