"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Image from "next/image"
import AccentText from "@/components/ui/accent-text"

import tqmSoft from "@/assets/projects/tqm-soft.png"
import inLove from "@/assets/projects/in-love.png"
import qlio from "@/assets/projects/qlio.png"
import rehab from "@/assets/projects/rehab.png"
import omega from "@/assets/projects/omega.png"
import sportRes from "@/assets/projects/sport-res.png"
import pasieka from "@/assets/projects/pasieka.png"
import corgi from "@/assets/projects/corgi.png"

gsap.registerPlugin(ScrollTrigger, SplitText)

const words = ["Concept", "Build", "Ship"]

const photos = [tqmSoft, inLove, qlio, rehab, omega, sportRes, pasieka, corgi]
const TILTS = [-18, 12, -8, 22, -14, 9, -22, 15]

const START_BG = "#1d1d1d"
const SCROLL_LENGTH = 4
const INSET = 5
const TOTAL_SPIN = Math.PI * 0.9

const CircleSection = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current!
        const content = section.querySelector<HTMLElement>("[data-content]")!
        const wordEls = [...section.querySelectorAll<HTMLElement>("[data-word]")]
        const photoEls = [...section.querySelectorAll<HTMLElement>("[data-photo]")]

        const css = getComputedStyle(document.documentElement)
        const color = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback
        const grey700 = color("--grey-700", "#1d1d1d")
        const black = color("--black", "#000")

        const mm = gsap.matchMedia()
        let cancelled = false

        document.fonts.ready.then(() => {
            if (cancelled) {
                return
            }

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(section, { backgroundColor: black })
                gsap.set([content, wordEls[0]], { visibility: "visible" })
            })

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const splits = wordEls.map(el => SplitText.create(el, { type: "lines,chars", mask: "lines" }))
                const chars = splits.map(split => split.chars)

                gsap.set(content, { scale: 0, visibility: "visible" })
                gsap.set(wordEls, { visibility: "visible" })
                gsap.set(chars.slice(1).flat(), { yPercent: 110 })
                gsap.set(photoEls, { visibility: "visible", xPercent: -50, yPercent: -50 })

                const setX = photoEls.map(el => gsap.quickSetter(el, "x", "px"))
                const setY = photoEls.map(el => gsap.quickSetter(el, "y", "px"))
                const setRotation = photoEls.map(el => gsap.quickSetter(el, "rotation", "deg"))
                const ring = { radius: 0, spin: 0 }

                const place = () => {
                    photoEls.forEach((_, i) => {
                        const angle = (i / photoEls.length) * Math.PI * 2 + ring.spin - Math.PI / 2

                        setX[i](Math.cos(angle) * ring.radius)
                        setY[i](Math.sin(angle) * ring.radius)
                        setRotation[i](TILTS[i % TILTS.length] + ring.spin * (180 / Math.PI) * 0.6)
                    })
                }

                const R_START = () => 24
                const R_MID = () => Math.max(Math.min(window.innerWidth, window.innerHeight) * 0.45, 220)
                const R_END = () => Math.hypot(window.innerWidth, window.innerHeight) * 0.8

                const tl = gsap.timeline({
                    defaults: { ease: "none" },
                    onUpdate: place,
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${ window.innerHeight * SCROLL_LENGTH }`,
                        pin: true,
                        scrub: 0.8,
                        invalidateOnRefresh: true,
                    }
                })

                tl.fromTo(photoEls, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out" }, 0)
                tl.fromTo(ring, { radius: R_START }, { radius: R_MID, duration: 2.2, ease: "power3.out" }, 0)

                tl.fromTo(content, { scale: 0 }, { scale: 1, duration: 1.2, ease: "power3.out" }, 1.1)

                tl.fromTo(section, { backgroundColor: START_BG }, { backgroundColor: grey700, duration: 3 }, 1)
                tl.fromTo(section, { backgroundColor: grey700 }, { backgroundColor: black, duration: 2.5, immediateRender: false }, 4.5)

                const swap = (from: number, to: number, at: number) => {
                    tl.to(chars[from], { yPercent: -110, duration: 0.8, stagger: 0.04, ease: "power3.in" }, at)
                    tl.fromTo(chars[to], { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.04, ease: "power3.out", immediateRender: false }, at + 0.35)
                }

                swap(0, 1, 3.6)
                swap(1, 2, 5.4)

                tl.fromTo(ring, { radius: R_MID }, { radius: R_END, duration: 2.5, ease: "power3.in", immediateRender: false }, 7)
                tl.fromTo(photoEls, { scale: 1 }, { scale: 2.4, duration: 2.5, ease: "power2.in", immediateRender: false }, 7)

                tl.fromTo(
                    section,
                    { clipPath: "inset(0% 0% 0% 0%)" },
                    { clipPath: `inset(0% ${ INSET }% 0% ${ INSET }%)`, duration: 1.5, ease: "power2.inOut", immediateRender: false },
                    8
                )

                tl.to(ring, { spin: TOTAL_SPIN, duration: tl.duration() }, 0)

                place()

                gsap.fromTo(
                    section,
                    { clipPath: `inset(0% ${ INSET }% 0% ${ INSET }%)` },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "top top",
                            scrub: 0.8,
                        },
                    }
                )

                ScrollTrigger.refresh()

                return () => splits.forEach(split => split.revert())
            })
        })

        return () => {
            cancelled = true
            mm.revert()
        }
    }, [])

    return (
        <div>
            <section ref={ sectionRef } className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1d1d1d]">
                {
                    photos.map((photo, index) => (
                        <div key={ index } data-photo className="pointer-events-none invisible absolute top-1/2 left-1/2 w-28 md:w-40">
                            <Image src={ photo } alt="" aria-hidden sizes="160px" className="h-auto w-full rounded-xs" />
                        </div>
                    ))
                }

                <div data-content className="invisible relative z-10 flex flex-col items-center space-y-1">
                    <AccentText className="text-grey-300!">
                        Workflow
                    </AccentText>

                    <h2 className="grid text-6xl md:text-7xl lg:text-8xl leading-[1.15] text-white">
                        {
                            words.map(word => (
                                <span key={ word } data-word className="invisible col-start-1 row-start-1 text-center">
                                    { word }
                                </span>
                            ))
                        }
                    </h2>
                </div>
            </section>
        </div>
    )
}

export default CircleSection