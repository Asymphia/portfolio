"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

const EASE = "expo.out"
const OFFSET = { x: 14, y: 14 }

const RULES: { selector: string, label: string }[] = [
    { selector: 'a[href$="#contact"]', label: "interested?" },
    { selector: 'a[href^="mailto:"]', label: "mail me" }
]

const HIDE = "input, textarea"
const TARGETS = ["[data-cursor]", HIDE, ...RULES.map(rule => rule.selector)].join(", ")

type Target = { el: Element, label: string | null, down?: string }

const resolve = (from: Element | null | undefined): Target | null => {
    const el = from?.closest(TARGETS)

    if (!el) {
        return null
    }

    if (el instanceof HTMLElement && el.dataset.cursor !== undefined) {
        const { cursor, cursorDown } = el.dataset

        return { el, label: cursor && cursor !== "hide" ? cursor : null, down: cursorDown }
    }

    if (el.matches(HIDE)) {
        return { el, label: null }
    }

    const rule = RULES.find(item => el.matches(item.selector))

    return rule ? { el, label: rule.label } : null
}

const Cursor = () => {
    const pathname = usePathname()
    const rootRef = useRef<HTMLDivElement>(null)
    const dotRef = useRef<HTMLSpanElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const refreshRef = useRef<() => void>(() => {})

    useEffect(() => {
        const mm = gsap.matchMedia()

        mm.add("(hover: hover) and (pointer: fine)", () => {
            const root = rootRef.current!
            const dot = dotRef.current!
            const text = textRef.current!

            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            const followOpts = { duration: reduce ? 0 : 0.5, ease: "power3.out" }

            let moveX!: ReturnType<typeof gsap.quickTo>
            let moveY!: ReturnType<typeof gsap.quickTo>

            let x = 0
            let y = 0
            let visible = false
            let pressed = false
            let current: Target | null = null
            let raf = 0

            gsap.set(text, { yPercent: 110 })

            const paintDot = () => {
                const hidden = current !== null && current.label === null

                gsap.to(dot, {
                    scale: hidden ? 0 : pressed ? 0.6 : 1,
                    duration: reduce ? 0 : 0.5,
                    ease: EASE,
                    overwrite: "auto",
                })
            }

            const setLabel = (label: string | null) => {
                if (label) {
                    text.textContent = `[ ${ label } ]`

                    gsap.fromTo(text, { yPercent: 110 }, {
                        yPercent: 0,
                        duration: reduce ? 0 : 0.8,
                        ease: EASE,
                        overwrite: "auto",
                    })
                } else {
                    gsap.to(text, {
                        yPercent: -110,
                        duration: reduce ? 0 : 0.5,
                        ease: EASE,
                        overwrite: "auto",
                    })
                }
            }

            const update = (next: Target | null) => {
                if (next?.el === current?.el) {
                    return
                }

                const prevLabel = current?.label ?? null
                const nextLabel = next?.label ?? null

                current = next

                if (nextLabel !== prevLabel) {
                    setLabel(nextLabel)
                }

                paintDot()
            }

            const refresh = () => {
                if (visible) {
                    update(resolve(document.elementFromPoint(x, y)))
                }
            }

            refreshRef.current = refresh

            const onMove = (e: PointerEvent) => {
                if (e.pointerType !== "mouse") {
                    return
                }

                x = e.clientX
                y = e.clientY

                const targetX = x + OFFSET.x
                const targetY = y + OFFSET.y

                if (!visible) {
                    visible = true

                    gsap.set(root, { x: targetX, y: targetY })
                    moveX = gsap.quickTo(root, "x", followOpts)
                    moveY = gsap.quickTo(root, "y", followOpts)

                    gsap.to(root, { opacity: 1, duration: 0.3, overwrite: "auto" })

                    return
                }

                moveX(targetX)
                moveY(targetY)
            }

            const onOver = (e: PointerEvent) => {
                if (e.pointerType === "mouse") {
                    update(resolve(e.target as Element))
                }
            }

            const onDown = (e: PointerEvent) => {
                if (e.pointerType !== "mouse") {
                    return
                }

                pressed = true

                if (current?.down) {
                    setLabel(current.down)
                }

                paintDot()
            }

            const onUp = () => {
                if (!pressed) {
                    return
                }

                pressed = false

                if (current?.down) {
                    setLabel(current.label)
                }

                paintDot()
            }

            const onLeave = () => {
                visible = false
                gsap.to(root, { opacity: 0, duration: 0.3, overwrite: "auto" })
                update(null)
            }

            const onScroll = () => {
                cancelAnimationFrame(raf)
                raf = requestAnimationFrame(refresh)
            }

            const html = document.documentElement

            document.addEventListener("pointermove", onMove)
            document.addEventListener("pointerover", onOver)
            document.addEventListener("pointerdown", onDown)
            document.addEventListener("pointerup", onUp)
            document.addEventListener("pointercancel", onUp)
            html.addEventListener("pointerleave", onLeave)
            window.addEventListener("scroll", onScroll, { passive: true })

            return () => {
                cancelAnimationFrame(raf)
                refreshRef.current = () => {}

                document.removeEventListener("pointermove", onMove)
                document.removeEventListener("pointerover", onOver)
                document.removeEventListener("pointerdown", onDown)
                document.removeEventListener("pointerup", onUp)
                document.removeEventListener("pointercancel", onUp)
                html.removeEventListener("pointerleave", onLeave)
                window.removeEventListener("scroll", onScroll)

                gsap.killTweensOf([root, dot, text])
            }
        })

        return () => mm.revert()
    }, [])

    useEffect(() => {
        refreshRef.current()
    }, [pathname])

    return (
        <div ref={ rootRef } className="pointer-events-none fixed left-0 top-0 z-60 text-white opacity-0 mix-blend-difference">
            <div className="flex -translate-y-1/2 items-center gap-2.5">
                <span ref={ dotRef } className="block size-2 shrink-0 rounded-full bg-white" />

                <span className="block overflow-hidden whitespace-nowrap text-sm uppercase leading-5">
                    <span ref={ textRef } className="block" />
                </span>
            </div>
        </div>
    )
}

export default Cursor