"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Image from "next/image"
import heroImg from "@/assets/hero-image.jpg"
import Button from "@/components/ui/button"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = "expo.out"

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const h1Ref = useRef<HTMLHeadingElement>(null)
    const frameRef = useRef<HTMLSpanElement>(null)
    const pRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current!
        const h1 = h1Ref.current!
        const frame = frameRef.current!
        const p = pRef.current!
        const cta = ctaRef.current!

        const words = h1.querySelectorAll<HTMLElement>("[data-split]")
        const show = [h1, p, cta]

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(show, { visibility: "visible" })
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

                SplitText.create(p, {
                    type: "lines,chars",
                    mask: "lines",
                    autoSplit: true,
                    onSplit: self => gsap.from(self.chars, {
                        yPercent: 110,
                        duration: 1.1,
                        stagger: 0.012,
                        delay: 0.25,
                        ease: EASE,
                    }),
                })

                gsap.set(show, { visibility: "visible" })

                gsap.from(frame, {
                    width: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    duration: 1.8,
                    delay: 0.7,
                    ease: "expo.inOut",
                    clearProps: "width,marginLeft,marginRight",
                })

                gsap.from(cta, { y: 24, opacity: 0, duration: 1, delay: 1.6, ease: EASE })

                gsap.to(section, {
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
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
        <section
            ref={ sectionRef }
            className="container flex flex-col items-center pt-32 sm:pt-40 lg:pt-50"
        >
            <h1
                ref={ h1Ref }
                className="invisible mb-5 flex flex-col items-center leading-[0.9] text-nowrap
                    md:mb-6 lg:flex-row text-[min(26cqw,10rem)] lg:text-[min(17cqw,15rem)]"
            >
                <span data-split>Julia</span>

                <span className="flex items-center lg:contents">
                    <span ref={ frameRef } className="mx-[0.08em] flex justify-center overflow-hidden rounded-sm">
                        <Image
                            src={ heroImg }
                            alt="Computer workstation"
                            priority
                            sizes="(min-width: 1024px) 250px, 120px"
                            className="h-auto w-[1.03em] max-w-none shrink-0"
                        />
                    </span>

                    <span data-split>Kawa</span>
                </span>
            </h1>

            <p ref={ pRef } className="invisible mb-8 max-w-220 text-balance text-center text-2xl/8 sm:text-3xl/10 md:text-4xl/12 lg:text-5xl/16 md:mb-10">
                Designing and coding web interfaces from Poland [ Rzeszów ]
            </p>

            <div ref={ ctaRef } className="invisible flex flex-wrap justify-center gap-3 sm:gap-6">
                <Button style="secondary" icon={ PaperAirplaneIcon } href="#contact">
                    Get in touch
                </Button>

                <Button style="primary" href="/projects">
                    Discover more
                </Button>
            </div>
        </section>
    )
}

export default HeroSection