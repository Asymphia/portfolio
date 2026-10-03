"use client"

import tqmSoft from "@/assets/projects/tqm-soft.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

const SliderSection = () => {
    const slides = [
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
        { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
    ]

    const viewportRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const setRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const viewport = viewportRef.current!
        const track = trackRef.current!
        const firstSet = setRef.current!

        const setX = gsap.quickSetter(track, "x", "px")

        let setWidth = firstSet.offsetWidth
        let x = 0
        let vel = 70
        let lastScrollY = window.scrollY

        let dragging = false
        let hovering = false
        let inView = true
        let lastPointerX = 0
        let lastPointerT = 0
        let dragVel = 0

        const ro = new ResizeObserver(() => setWidth = firstSet.offsetWidth)
        ro.observe(firstSet)

        const io = new IntersectionObserver(([entry]) => inView = entry.isIntersecting)
        io.observe(viewport)

        const tick = (_time: number, deltaMs: number) => {
            const dt = gsap.utils.clamp(0.001, 0.05, deltaMs / 1000)

            const scrollY = window.scrollY
            const scrollVel = (scrollY - lastScrollY) / dt
            lastScrollY = scrollY

            if(!inView) {
                return
            }

            if(!dragging) {
                const boost = gsap.utils.clamp(
                    -2600,
                    2600,
                    scrollVel * .8
                )

                const target = 70 * (hovering ? .35 : 1) + boost

                vel += (target - vel) * (1 - Math.exp(-5 * dt))
                x += vel * dt
            }

            setX(gsap.utils.wrap(-setWidth, 0, x))
        }

        gsap.ticker.add(tick)

        const onDown = (e: PointerEvent) => {
            if (e.pointerType === "mouse" && e.button !== 0) {
                return
            }

            dragging = true
            dragVel = 0

            lastPointerX = e.clientX
            lastPointerT = performance.now()

            viewport.setPointerCapture(e.pointerId)
        }

        const onMove = (e: PointerEvent) => {
            if (!dragging) {
                return
            }

            const now = performance.now()
            const dx = e.clientX - lastPointerX
            const dt = Math.max((now - lastPointerT) / 1000, 0.001)

            x += dx
            dragVel = gsap.utils.interpolate(dragVel, dx / dt, 0.4)

            lastPointerX = e.clientX
            lastPointerT = now
        }

        const onUp = (e: PointerEvent) => {
            if (!dragging) {
                return
            }

            dragging = false

            const idle = performance.now() - lastPointerT > 80
            vel = idle ? 0 : gsap.utils.clamp(-4000, 4000, dragVel)

            if (viewport.hasPointerCapture(e.pointerId)) {
                viewport.releasePointerCapture(e.pointerId)
            }
        }

        const onEnter = (e: PointerEvent) => {
            if (e.pointerType === "mouse") {
                hovering = true
            }
        }

        const onLeave = () => {
            hovering = false
        }

        viewport.addEventListener("pointerdown", onDown)
        viewport.addEventListener("pointermove", onMove)
        viewport.addEventListener("pointerup", onUp)
        viewport.addEventListener("pointercancel", onUp)
        viewport.addEventListener("pointerenter", onEnter)
        viewport.addEventListener("pointerleave", onLeave)

        return () => {
            gsap.ticker.remove(tick)
            ro.disconnect()
            io.disconnect()
            viewport.removeEventListener("pointerdown", onDown)
            viewport.removeEventListener("pointermove", onMove)
            viewport.removeEventListener("pointerup", onUp)
            viewport.removeEventListener("pointercancel", onUp)
            viewport.removeEventListener("pointerenter", onEnter)
            viewport.removeEventListener("pointerleave", onLeave)
        }
    }, [])

    return (
        <section ref={ viewportRef } className="overflow-hidden select-none">
            <div ref={ trackRef } className="flex w-max [&:hover_.slide:not(:hover)]:opacity-50">
                {
                    [0, 1].map(copy => (
                        <div key={ copy } ref={ copy === 0 ? setRef : undefined } className="flex shrink-0 items-start gap-8 pr-8">
                            {
                                slides.map((slide, index) => (
                                    <div key={ index } className="slide group shrink-0 transition-opacity duration-500 ease-out w-[calc((100vw-4rem)/3)]">
                                        <div className="overflow-hidden rounded-sm">
                                            <Image
                                                src={ slide.image }
                                                alt={ copy === 0 ? slide.alt : "" }
                                                sizes="(min-width: 1024px) 33vw, 80vw"
                                                draggable={ false }
                                                className="w-full transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SliderSection