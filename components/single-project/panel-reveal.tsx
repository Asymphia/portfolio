"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

const EASE = "expo.out"

const PanelReveal = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const root = rootRef.current!
        const find = (name: string) => [...root.querySelectorAll<HTMLElement>(`[data-reveal='${ name }']`)]

        const title = find("title")
        const cells = find("cell")
        const text = find("text")
        const lines = find("line")
        const items = find("item")
        const cta = [...root.querySelectorAll<HTMLElement>("[data-reveal='cta'] > *")]

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(root, { visibility: "visible" })
            return
        }

        let cancelled = false
        const ctx = gsap.context(() => {}, root)

        document.fonts.ready.then(() => {
            if (cancelled) {
                return
            }

            ctx.add(() => {
                const words = (targets: HTMLElement[], vars: gsap.TweenVars) =>
                    SplitText.create(targets, {
                        type: "lines,words",
                        mask: "lines",
                        autoSplit: true,
                        onSplit: self => gsap.from(self.words, { yPercent: 110, ease: EASE, ...vars }),
                    })

                words(title, { duration: 1.2, stagger: 0.1 })
                words(cells, { duration: 1.1, stagger: 0.05, delay: 0.35 })
                words(text, { duration: 1, stagger: 0.015, delay: 0.8 })

                gsap.from(lines, { scaleX: 0, transformOrigin: "left center", duration: 1.4, ease: EASE, stagger: 0.08, delay: 0.3 })

                gsap.from(items, { opacity: 0, y: 16, duration: 1, ease: EASE, stagger: 0.06, delay: 0.7 })

                gsap.from(cta, { opacity: 0, y: 24, duration: 1.1, ease: EASE, stagger: 0.1, delay: 1.2 })

                gsap.set(root, { visibility: "visible" })
            })
        })

        return () => {
            cancelled = true
            ctx.revert()
        }
    }, [])

    return (
        <div ref={ rootRef } className={`invisible ${ className }`}>
            { children }
        </div>
    )
}

export default PanelReveal