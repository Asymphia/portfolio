"use client"

import { useEffect, useRef, type CSSProperties } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

import arkweb from "@/assets/projects/arkweb.png"
import scribre from "@/assets/projects/scribre.png"
import musicshare from "@/assets/projects/musicshare.png"
import corgi from "@/assets/projects/corgi.png"

gsap.registerPlugin(ScrollTrigger)

const projects = [
    { image: arkweb, title: "Arkweb" },
    { image: scribre, title: "Scribre" },
    { image: musicshare, title: "MusicShare" },
    { image: corgi, title: "Corgi" }
]

const RATIO = projects[0].image.width / projects[0].image.height

const SCROLL_LENGTH = 3
const STEP = 1
const HOLD = 0.35
const OUT_TILT = 12
const LOOPS = 1.5
const TEXT_SIZE = "clamp(6rem, 17vw, 15rem)"
const OVERLAP = 0.3
const CLIP = 0.12
const EXIT_MARGIN = 0.2

const VisualSection = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLHeadingElement>(null)
    const copyRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current!
        const section = sectionRef.current!
        const track = trackRef.current!
        const copy = copyRef.current!

        const cards = [...section.querySelectorAll<HTMLElement>("[data-card]")]
        const labels = [...section.querySelectorAll<HTMLElement>("[data-label]")]

        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const setX = gsap.quickSetter(track, "x", "px")
            let copyWidth = copy.offsetWidth

            const ro = new ResizeObserver(() => copyWidth = copy.offsetWidth)
            ro.observe(copy)

            const loop = { p: 0 }
            const applyLoop = () => setX(gsap.utils.wrap(-copyWidth, 0, -loop.p * copyWidth * LOOPS))

            gsap.set(cards, { transformPerspective: 1400 })
            gsap.set(cards.slice(1), { scale: 0.94 })
            gsap.set(labels.slice(1), { yPercent: 110 })

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                onUpdate: applyLoop,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${ window.innerHeight * SCROLL_LENGTH }`,
                    pin: true,
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                    refreshPriority: -1
                }
            })

            cards.slice(0, -1).forEach((card, i) => {
                const dir = i % 2 === 0 ? -1 : 1
                const at = i * (STEP + HOLD)

                tl.to(card, {
                    x: () => dir * (section.clientWidth / 2 + card.offsetWidth * (0.5 + EXIT_MARGIN)),
                    rotationY: -dir * OUT_TILT,
                    rotationZ: dir * 3,
                    duration: STEP,
                    ease: "power2.inOut"
                }, at)

                tl.to(cards[i + 1], { scale: 1, duration: STEP, ease: "power2.inOut" }, at)

                tl.to(labels[i], { yPercent: -110, duration: STEP * 0.6, ease: "power2.in" }, at)
                tl.fromTo(labels[i + 1], { yPercent: 110 }, { yPercent: 0, duration: STEP * 0.6, ease: "power2.out", immediateRender: false }, at + STEP * 0.4)
            })

            tl.to(loop, { p: 1, duration: tl.duration() }, 0)

            applyLoop()

            gsap.fromTo(
                wrapper,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 90%",
                        end: "top 55%",
                        scrub: 0.8,
                        refreshPriority: -1
                    }
                }
            )

            return () => ro.disconnect()
        })

        return () => mm.revert()
    }, [])

    return (
        <div ref={ wrapperRef }>
            <section ref={ sectionRef } className="relative flex h-screen flex-col items-center justify-end overflow-clip" style={{ "--t": TEXT_SIZE } as CSSProperties}>
                <div className="container pointer-events-none absolute inset-x-0 top-1/2 z-1 hidden -translate-y-1/2 lg:block">
                    <div className="grid overflow-hidden text-sm uppercase">
                        {
                            projects.map((project, index) => (
                                <span key={ project.title } data-label className="col-start-1 row-start-1">
                                    [ { project.title } ]
                                    {" "}
                                    <span className="text-grey-500">
                                    0{ index + 1 } / 0{ projects.length }
                                </span>
                            </span>
                            ))
                        }
                    </div>
                </div>

                <div
                    className="relative z-2"
                    style={{
                        aspectRatio: RATIO,
                        width: `min(60rem, calc(100% - 2rem), calc((100vh - 6rem - var(--t) * ${ 0.9 - OVERLAP - CLIP }) * ${ RATIO }))`,
                    }}
                >
                    {
                        projects.map((project, index) => (
                            <div key={ project.title } data-card
                                className="absolute inset-0 overflow-hidden rounded-sm will-change-transform"
                                style={{ zIndex: projects.length - index }}
                            >
                                <Image
                                    src={ project.image }
                                    alt={`Screenshot of ${ project.title }'s website`}
                                    fill
                                    sizes="(min-width: 1024px) 60rem, 100vw"
                                    priority={ index === 0 }
                                    draggable={ false }
                                    className="object-cover"
                                />
                            </div>
                        ))
                    }
                </div>

                <div
                    className="pointer-events-none relative z-1 w-full overflow-x-clip"
                    style={{
                        marginTop: `calc(var(--t) * -${ OVERLAP })`,
                        marginBottom: `calc(var(--t) * -${ CLIP })`,
                    }}
                >
                    <h2 ref={ trackRef } className="flex w-max uppercase leading-[0.9] will-change-transform" style={{ fontSize: "var(--t)" }}>
                        {
                            [0, 1, 2].map(index => (
                                <span key={ index } ref={ index === 0 ? copyRef : undefined } aria-hidden={ index > 0 } className="pr-[0.3em] text-nowrap">
                                    More visual highlights
                                </span>
                            ))
                        }
                    </h2>
                </div>
            </section>
        </div>
    )
}

export default VisualSection