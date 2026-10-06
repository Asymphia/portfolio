"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"

type MarqueeProps = {
    children: ReactNode
    speed?: number
    gap?: string
    hoverSlowdown?: number
    className?: string
}

const SCROLL_FACTOR = 0.8
const MAX_SCROLL_BOOST = 2600
const MAX_FLING = 4000
const EASING = 5

const Marquee = ({ children, speed = 50, gap = "2rem", hoverSlowdown = 0.35, className = "" }: MarqueeProps) => {
    const viewportRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const setRef = useRef<HTMLDivElement>(null)
    const cloneRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const viewport = viewportRef.current!
        const track = trackRef.current!
        const firstSet = setRef.current!

        const setX = gsap.quickSetter(track, "x", "px")

        let setWidth = firstSet.offsetWidth
        let x = 0
        let vel = speed
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

            if (!inView) {
                return
            }

            if (!dragging) {
                const boost = gsap.utils.clamp(-MAX_SCROLL_BOOST, MAX_SCROLL_BOOST, scrollVel * SCROLL_FACTOR)
                const target = speed * (hovering ? hoverSlowdown : 1) + boost

                vel += (target - vel) * (1 - Math.exp(-EASING * dt))
                x += vel * dt
            }

            setX(gsap.utils.wrap(-setWidth, 0, x))
        }

        gsap.ticker.add(tick)

        let moved = false
        let startX = 0

        const onDown = (e: PointerEvent) => {
            if (e.pointerType === "mouse" && e.button !== 0) {
                return
            }

            dragging = true
            moved = false
            dragVel = 0
            startX = e.clientX

            lastPointerX = e.clientX
            lastPointerT = performance.now()
        }

        const onMove = (e: PointerEvent) => {
            if (!dragging) {
                return
            }

            if (!moved) {
                if (Math.abs(e.clientX - startX) < 5) {
                    return
                }

                moved = true
                viewport.setPointerCapture(e.pointerId)
                lastPointerX = e.clientX
                lastPointerT = performance.now()

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

            if (!moved) {
                return
            }

            const idle = performance.now() - lastPointerT > 80
            vel = idle ? 0 : gsap.utils.clamp(-MAX_FLING, MAX_FLING, dragVel)

            if (viewport.hasPointerCapture(e.pointerId)) {
                viewport.releasePointerCapture(e.pointerId)
            }
        }

        const onClick = (e: MouseEvent) => {
            if (moved) {
                e.preventDefault()
                e.stopPropagation()
                moved = false
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

        viewport.addEventListener("click", onClick, true)
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
            viewport.removeEventListener("click", onClick, true)
        }
    }, [speed, hoverSlowdown])

    useEffect(() => {
        cloneRef.current
            ?.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [tabindex]")
            .forEach(el => el.tabIndex = -1)
    }, [children])

    return (
        <div ref={ viewportRef } className="touch-pan-y overflow-hidden select-none">
            <div ref={ trackRef } className={`flex w-max will-change-transform ${ className }`}>
                {
                    [0, 1].map(copy => (
                        <div
                            key={ copy }
                            ref={ copy === 0 ? setRef : cloneRef }
                            aria-hidden={ copy === 1 }
                            className="flex shrink-0 items-start"
                            style={{ gap, paddingRight: gap }}
                        >
                            { children }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Marquee