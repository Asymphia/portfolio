"use client"

import { MouseEvent, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AccentText from "@/components/ui/accent-text"

import matdev from "@/assets/projects/matdev.png"
import scribre from "@/assets/projects/scribre.png"
import corgi from "@/assets/projects/corgi.png"
import tqmSoft from "@/assets/projects/tqm-soft.png"

gsap.registerPlugin(ScrollTrigger)

const services = [
    { title: "Frontend Development", image: matdev.src, alt: "Matdev PM website", dataCursor: "React" },
    { title: "Fullstack Solutions", image: scribre.src, alt: "Scribre website", dataCursor: "Next.js" },
    { title: "UI/UX Design", image: corgi.src, alt: "Corgi website", dataCursor: "Figma" },
    { title: "Wordpress Websites", image: tqmSoft.src, alt: "TQM Soft website", dataCursor: "PHP" }
]

const IMAGE_HEIGHT = 300
const OFFSET = 14

const START_INSET = 4
const PIN_LENGTH = "+=60%"
const HOLD = 0.4
const EXIT = 0.6

const THRESHOLD = 0.85
const BOTTOM_THRESHOLD = 1 - THRESHOLD
const HYSTERESIS = 0.03
const MIN_OPACITY = 0.15
const MIN_SCALE = 0.9

const WhatIDoSection = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const areaRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const boxRef = useRef<HTMLDivElement>(null)
    const imagesRef = useRef<(HTMLImageElement | null)[]>([])

    const activeRef = useRef<number | null>(null)
    const enabledRef = useRef(false)
    const moveRef = useRef<((x: number, y: number, snap: boolean) => void) | null>(null)

    const slide = (index: number, yPercent: number) => {
        gsap.to(imagesRef.current[index], { yPercent, duration: 0.7, ease: "expo.out", overwrite: true })
    }

    const hide = () => {
        if (activeRef.current === null) {
            return
        }

        slide(activeRef.current, -100)
        activeRef.current = null
    }

    const show = (index: number) => {
        const prev = activeRef.current

        if (!enabledRef.current || prev === index) {
            return
        }

        const dir = prev !== null && index < prev ? -1 : 1
        const image = imagesRef.current[index]!

        if (prev !== null) {
            slide(prev, -dir * 100)
        }

        if (Math.abs(gsap.getProperty(image, "yPercent") as number) >= 100) {
            gsap.set(image, { yPercent: dir * 100 })
        }

        slide(index, 0)
        activeRef.current = index
    }

    const place = (e: MouseEvent, snap = false) => {
        moveRef.current?.(e.clientX + OFFSET, e.clientY - OFFSET - IMAGE_HEIGHT, snap)
    }

    useEffect(() => {
        const section = sectionRef.current!
        const box = boxRef.current!

        gsap.set(imagesRef.current, { yPercent: 100 })
        box.style.visibility = "visible"

        const xTo = gsap.quickTo(box, "x", { duration: 0.5, ease: "power3" })
        const yTo = gsap.quickTo(box, "y", { duration: 0.5, ease: "power3" })

        moveRef.current = (x, y, snap) => {
            if (snap) {
                gsap.set(box, { x, y })
            } else {
                xTo(x)
                yTo(y)
            }
        }

        const sync = (self: ScrollTrigger) => {
            enabledRef.current = self.isActive

            if (!self.isActive) {
                hide()
            }
        }

        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const area = areaRef.current!
            const list = listRef.current!
            const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", section)
            const full = "inset(0% 0% 0% 0%)"
            const narrow = `inset(0% ${ START_INSET }% 0% ${ START_INSET }%)`

            const reveal = gsap.fromTo(
                items,
                { opacity: 0, y: 48 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.12, paused: true }
            )

            let shown = false

            const play = () => {
                if (shown) {
                    return
                }

                shown = true
                reveal.restart()
            }

            const io = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    return
                }

                shown = false
                reveal.pause(0)
            })
            io.observe(section)

            const state = { v: 0 }
            let active = false
            let pinned = false

            const apply = () => {
                list.style.opacity = String(MIN_OPACITY + (1 - MIN_OPACITY) * state.v)
                list.style.transform = `scale(${ MIN_SCALE + (1 - MIN_SCALE) * state.v })`
            }

            const updateEnabled = () => {
                enabledRef.current = pinned && active

                if (!enabledRef.current) {
                    hide()
                }
            }

            const isActive = (top: number, bottom: number) => {
                const margin = active ? HYSTERESIS : -HYSTERESIS

                if (top > THRESHOLD + margin) {
                    return false
                }

                if (bottom < BOTTOM_THRESHOLD - margin) {
                    return false
                }

                return true
            }

            const evaluate = (instant: boolean) => {
                const rect = area.getBoundingClientRect()
                const vh = window.innerHeight
                const next = isActive(rect.top / vh, rect.bottom / vh)

                if (instant) {
                    active = next
                    state.v = next ? 1 : 0
                    apply()
                } else if (next !== active) {
                    active = next

                    gsap.to(state, {
                        v: next ? 1 : 0,
                        duration: next ? 1 : 0.8,
                        ease: next ? "expo.out" : "power3.out",
                        overwrite: true,
                        onUpdate: apply,
                    })
                } else {
                    return
                }

                if (active) {
                    play()
                }

                updateEnabled()
            }

            const tick = () => {
                const rect = area.getBoundingClientRect()

                if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) {
                    return
                }

                evaluate(false)
            }

            gsap.fromTo(
                section,
                { clipPath: narrow },
                {
                    clipPath: full,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "top top",
                        scrub: 0.8,
                    },
                }
            )

            gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: PIN_LENGTH,
                    pin: true,
                    scrub: 0.8,
                    onToggle: self => {
                        pinned = self.isActive
                        updateEnabled()
                    },
                },
            })
                .to({}, { duration: HOLD })
                .fromTo(
                    section,
                    { clipPath: full },
                    { clipPath: narrow, ease: "power2.in", duration: EXIT, immediateRender: false }
                )

            evaluate(true)
            gsap.ticker.add(tick)

            return () => {
                gsap.ticker.remove(tick)
                io.disconnect()
                gsap.killTweensOf(state)
                list.style.opacity = ""
                list.style.transform = ""
            }
        })

        mm.add("(prefers-reduced-motion: reduce)", () => {
            ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                onToggle: sync,
            })
        })

        return () => mm.revert()
    }, [])

    return (
        <>
            <section ref={ sectionRef } className="h-screen bg-grey-300 relative py-20 lg:py-30">
                <div className="container h-full">
                    <AccentText>
                        What I can help you with
                    </AccentText>

                    <div ref={ areaRef } className="absolute left-1/2 top-1/2 -translate-1/2">
                        <div
                            ref={ listRef }
                            className="flex flex-col"
                            onMouseEnter={ e => place(e, true) }
                            onMouseMove={ place }
                            onMouseLeave={ hide }
                        >
                            {
                                services.map((service, index) => (
                                    <h3
                                        key={ index }
                                        data-reveal
                                        onMouseEnter={ () => show(index) }
                                        data-cursor={ service.dataCursor }
                                        className="w-full cursor-pointer py-3 lg:py-4 text-center text-5xl md:text-7xl lg:text-8xl md:text-nowrap transition-colors duration-500 text-grey-500 hover:text-grey-700"
                                    >
                                        { service.title }
                                    </h3>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ boxRef } className="pointer-events-none invisible fixed left-0 top-0 z-20 h-75">
                {
                    services.map((service, index) => (
                        <div key={ index } className="absolute left-0 top-0 overflow-hidden rounded-sm">
                            <img
                                ref={ el => { imagesRef.current[index] = el } }
                                src={ service.image }
                                alt={ service.alt }
                                className="block h-50 md:h-60 lg:h-75 w-auto max-w-none"
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WhatIDoSection