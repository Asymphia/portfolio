"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"

const THRESHOLD = 0.85
const BOTTOM_THRESHOLD = 1 - THRESHOLD
const FIRST_ROW_THRESHOLD = 1.2
const HYSTERESIS = 0.03
const MIN_OPACITY = 0.15
const MIN_SCALE = 0.9
const ANIMATE_ON_SCROLL_UP = true

type Row = {
    items: HTMLElement[]
    top: number
    bottom: number
    threshold: number
    state: { v: number }
    active: boolean
}

const ProjectsReveal = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
        }

        const grid = gridRef.current!
        const items = [...grid.querySelectorAll<HTMLElement>("[data-project]")]

        const memory = new Map<HTMLElement, { v: number, active: boolean }>()
        let rows: Row[] = []

        const apply = (row: Row) => {
            const opacity = MIN_OPACITY + (1 - MIN_OPACITY) * row.state.v
            const scale = MIN_SCALE + (1 - MIN_SCALE) * row.state.v

            row.items.forEach(el => {
                el.style.opacity = String(opacity)
                el.style.transform = `scale(${ scale })`
            })
        }

        const isActive = (row: Row, top: number, bottom: number) => {
            const margin = row.active ? HYSTERESIS : -HYSTERESIS

            if (top > row.threshold + margin) {
                return false
            }

            if (ANIMATE_ON_SCROLL_UP && bottom < BOTTOM_THRESHOLD - margin) {
                return false
            }

            return true
        }

        const measure = () => {
            const groups = new Map<number, HTMLElement[]>()

            items.forEach(el => {
                const key = Math.round(el.offsetTop / 10)
                groups.set(key, [...(groups.get(key) ?? []), el])
            })

            rows = [...groups.values()]
                .map(group => ({
                    group,
                    top: Math.min(...group.map(el => el.offsetTop)),
                    bottom: Math.max(...group.map(el => el.offsetTop + el.offsetHeight)),
                }))
                .sort((a, b) => a.top - b.top)
                .map(({ group, top, bottom }, index) => {
                    const saved = memory.get(group[0])

                    return {
                        items: group,
                        top,
                        bottom,
                        threshold: index === 0 ? FIRST_ROW_THRESHOLD : THRESHOLD,
                        state: saved ? { v: saved.v } : { v: 0 },
                        active: saved?.active ?? false,
                    }
                })
        }

        const evaluate = (instant: boolean) => {
            const rect = grid.getBoundingClientRect()
            const vh = window.innerHeight

            rows.forEach(row => {
                const next = isActive(row, (rect.top + row.top) / vh, (rect.top + row.bottom) / vh)

                if (instant) {
                    row.active = next
                    row.state.v = next ? 1 : 0
                    apply(row)
                } else if (next !== row.active) {
                    row.active = next

                    gsap.to(row.state, {
                        v: next ? 1 : 0,
                        duration: next ? 1 : 0.8,
                        ease: next ? "expo.out" : "power3.out",
                        overwrite: true,
                        onUpdate: () => apply(row),
                    })
                }

                memory.set(row.items[0], { v: row.state.v, active: row.active })
            })
        }

        measure()
        evaluate(true)

        const ro = new ResizeObserver(() => {
            rows.forEach(row => gsap.killTweensOf(row.state))
            measure()
            evaluate(true)
        })
        ro.observe(grid)

        const tick = () => {
            const rect = grid.getBoundingClientRect()
            
            if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) {
                return
            }

            evaluate(false)
        }

        gsap.ticker.add(tick)

        return () => {
            gsap.ticker.remove(tick)
            ro.disconnect()
            rows.forEach(row => gsap.killTweensOf(row.state))
            items.forEach(el => {
                el.style.opacity = ""
                el.style.transform = ""
            })
        }
    }, [])

    return (
        <div ref={ gridRef } className={`relative ${ className }`}>
            { children }
        </div>
    )
}

export default ProjectsReveal