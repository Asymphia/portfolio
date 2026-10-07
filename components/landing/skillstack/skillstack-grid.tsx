"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

import figma from "@/assets/logos/figma.svg"
import gsapLogo from "@/assets/logos/gsap.svg"
import react from "@/assets/logos/react.svg"
import next from "@/assets/logos/next.svg"
import typescript from "@/assets/logos/typescript.svg"
import tailwind from "@/assets/logos/tailwind.svg"
import wordpress from "@/assets/logos/wordpress.svg"
import rootsSage from "@/assets/logos/roots-sage.svg"
import acf from "@/assets/logos/acf.svg"
import php from "@/assets/logos/php.svg"

const skillstackItems = [
    { icon: figma, alt: "Figma's logo" },
    { icon: gsapLogo, alt: "GSAP's logo" },
    { icon: react, alt: "React's logo" },
    { icon: next, alt: "Next.js's logo" },
    { icon: typescript, alt: "Typescript's logo" },
    { icon: tailwind, alt: "Tailwind's logo" },
    { icon: wordpress, alt: "WordPress's logo" },
    { icon: rootsSage, alt: "Roots Sage's logo" },
    { icon: acf, alt: "ACF's logo" },
    { icon: php, alt: "PHP's logo" },
]

const EASE = "expo.out"
const SHADOW_ON = "rgba(0, 0, 0, 0.1) 0px 12px 28px -6px"
const SHADOW_OFF = "rgba(0, 0, 0, 0) 0px 0px 0px 0px"

const SkillstackGrid = () => {
    const gridRef = useRef<HTMLDivElement>(null)
    const tilesRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const grid = gridRef.current!
        const tiles = tilesRef.current

        gsap.set(tiles, { boxShadow: SHADOW_OFF })

        let slots: { x: number, y: number }[] = []
        let size = { w: 0, h: 0 }
        const order = tiles.map((_, i) => i)

        let active = -1
        let startPX = 0
        let startPY = 0
        let startX = 0
        let startY = 0
        let qx!: ReturnType<typeof gsap.quickTo>
        let qy!: ReturnType<typeof gsap.quickTo>

        const measure = () => {
            slots = tiles.map(tile => ({ x: tile.offsetLeft, y: tile.offsetTop }))
            size = { w: tiles[0].offsetWidth, h: tiles[0].offsetHeight }
        }

        const targetFor = (tile: number) => {
            const slot = order.indexOf(tile)
            return { x: slots[slot].x - slots[tile].x, y: slots[slot].y - slots[tile].y }
        }

        const place = (tile: number, animate: boolean) => {
            const pos = targetFor(tile)

            if (animate) {
                gsap.to(tiles[tile], { ...pos, duration: .7, ease: EASE, overwrite: "auto" })
            } else {
                gsap.set(tiles[tile], pos)
            }
        }

        const ro = new ResizeObserver(() => {
            measure()
            tiles.forEach((_, i) => i !== active && place(i, false))
        })
        ro.observe(grid)

        const onDown = (e: PointerEvent) => {
            if (e.pointerType === "touch" || e.button !== 0) {
                return
            }

            const tile = (e.target as HTMLElement).closest<HTMLElement>("[data-tile]")

            if (!tile) {
                return
            }

            active = Number(tile.dataset.tile)
            startPX = e.clientX
            startPY = e.clientY
            startX = gsap.getProperty(tile, "x") as number
            startY = gsap.getProperty(tile, "y") as number

            tile.setPointerCapture(e.pointerId)
            gsap.killTweensOf(tile, "x,y")

            qx = gsap.quickTo(tile, "x", { duration: .35, ease: "power3.out" })
            qy = gsap.quickTo(tile, "y", { duration: .35, ease: "power3.out" })

            gsap.set(tile, { zIndex: 10 })
            gsap.to(tile, { scale: 1.03, boxShadow: SHADOW_ON, duration: .5, ease: EASE, overwrite: "auto" })
        }

        const onMove = (e: PointerEvent) => {
            if (active < 0) {
                return
            }

            const dx = e.clientX - startPX
            const dy = e.clientY - startPY

            qx(startX + dx)
            qy(startY + dy)

            const cx = slots[active].x + startX + dx + size.w / 2
            const cy = slots[active].y + startY + dy + size.h / 2

            let nearest = 0
            let best = Infinity

            slots.forEach((slot, index) => {
                const dist = (slot.x + size.w / 2 - cx) ** 2 + (slot.y + size.h / 2 - cy) ** 2

                if (dist < best) {
                    best = dist
                    nearest = index
                }
            })

            const current = order.indexOf(active)

            if (nearest !== current) {
                order.splice(current, 1)
                order.splice(nearest, 0, active)
                tiles.forEach((_, i) => i !== active && place(i, true))
            }
        }

        const onUp = (e: PointerEvent) => {
            if (active < 0) {
                return
            }

            const i = active
            const tile = tiles[i]
            active = -1

            if (tile.hasPointerCapture(e.pointerId)) {
                tile.releasePointerCapture(e.pointerId)
            }

            gsap.to(tile, { ...targetFor(i), duration: .8, ease: EASE, overwrite: "auto" })
            gsap.to(tile, {
                scale: 1,
                boxShadow: SHADOW_OFF,
                duration: .8,
                ease: EASE,
                onComplete: () => { gsap.set(tile, { zIndex: 0 }) },
            })
        }

        grid.addEventListener("pointerdown", onDown)
        grid.addEventListener("pointermove", onMove)
        grid.addEventListener("pointerup", onUp)
        grid.addEventListener("pointercancel", onUp)

        return () => {
            ro.disconnect()
            gsap.killTweensOf(tiles)

            grid.removeEventListener("pointerdown", onDown)
            grid.removeEventListener("pointermove", onMove)
            grid.removeEventListener("pointerup", onUp)
            grid.removeEventListener("pointercancel", onUp)
        }
    }, [])

    return (
        <div ref={ gridRef } className="relative ml-42 grid grid-cols-5 gap-8 select-none [&:hover_.tile:not(:hover)]:opacity-60">
            {
                skillstackItems.map((item, index) => (
                    <div
                        key={ item.alt }
                        data-tile={ index }
                        ref={ el => { if (el) tilesRef.current[index] = el } }
                        className="tile group flex aspect-square w-full items-center justify-center rounded-sm bg-grey-300 transition-[opacity,background-color] duration-500 ease-out hover:bg-white"
                    >
                        <Image
                            src={ item.icon }
                            alt={ item.alt }
                            quality={ 100 }
                            sizes="10vw"
                            draggable={ false }
                            className="pointer-events-none will-change-transform transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SkillstackGrid