"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Image from "next/image"
import tqmSoft from "@/assets/projects/tqm-soft.png"
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
        <section ref={ sectionRef } className="container flex flex-col items-center pt-50">
            <h1 ref={ h1Ref } className="invisible text-display-lg flex items-center mb-6">
                <span data-split>Julia</span>

                <span ref={ frameRef } className="mx-4 flex justify-center overflow-hidden rounded-sm">
                    <Image
                        src={ tqmSoft }
                        alt="Screenshot of a TQM Soft's website"
                        priority
                        className="max-w-62 shrink-0"
                    />
                </span>

                <span data-split>Kawa</span>
            </h1>

            <p ref={ pRef } className="invisible text-5xl/16 max-w-220 text-center mb-10">
                Designing and coding web interfaces from Poland [ Rzeszów ]
            </p>

            <div ref={ ctaRef } className="invisible flex gap-6">
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