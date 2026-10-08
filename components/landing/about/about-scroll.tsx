"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const SCROLL_LENGTH = 1.5
const STAGGER = 0.1
const WAVE_WORDS = 1

const AboutScroll = ({ children, id="" }: { children: ReactNode, id?: string }) => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current!
        const text = section.querySelector<HTMLElement>("[data-about-text]")!
        const star = section.querySelector<HTMLElement>("[data-about-star]")!
        const black = getComputedStyle(document.documentElement).getPropertyValue("--black").trim() || "#000"

        const mm = gsap.matchMedia()

        mm.add(
            {
                desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
                mobile: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
                reduce: "(prefers-reduced-motion: reduce)",
            },
            context => {
                const { desktop, reduce } = context.conditions as { desktop: boolean, reduce: boolean }

                if (reduce) {
                    gsap.set(text, { color: black })
                    return
                }

                const split = SplitText.create(text, { type: "words" })

                const tl = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: desktop
                        ? {
                            trigger: section,
                            start: "center center",
                            end: () => `+=${ window.innerHeight * SCROLL_LENGTH }`,
                            pin: true,
                            scrub: 0.8,
                            invalidateOnRefresh: true,
                        }
                        : {
                            trigger: text,
                            start: "top 80%",
                            end: "bottom 40%",
                            scrub: 0.8,
                        }
                })

                tl.to(split.words, { color: black, duration: STAGGER * WAVE_WORDS, stagger: STAGGER })

                if (desktop) {
                    tl.to({}, { duration: 0.8 })
                }

                tl.to(star, { rotation: 120, duration: tl.duration() }, 0)
            }
        )

        let cancelled = false
        document.fonts.ready.then(() => {
            if (!cancelled) {
                ScrollTrigger.refresh()
            }
        })

        return () => {
            cancelled = true
            mm.revert()
        }
    }, [])

    return (
        <div className="overflow-x-clip">
            <section ref={ sectionRef } id={ id }>
                { children }
            </section>
        </div>
    )
}

export default AboutScroll