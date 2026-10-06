"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const START_INSET = 4

const FooterReveal = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const wrapperRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current!
        const inner = innerRef.current!

        ScrollTrigger.clearScrollMemory()

        if (!window.location.hash) {
            window.scrollTo({ top: 0, behavior: "instant" })
        }

        const refresh = gsap.delayedCall(0.1, () => ScrollTrigger.refresh(true)).pause()

        const syncHeight = () => {
            wrapper.style.height = `${ inner.offsetHeight }px`
            refresh.restart(true)
        }

        const roInner = new ResizeObserver(syncHeight)
        roInner.observe(inner)

        const roBody = new ResizeObserver(() => refresh.restart(true))
        roBody.observe(document.body)

        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.fromTo(
                inner,
                { clipPath: `inset(0% ${ START_INSET }% 0% ${ START_INSET }%)` },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 0.8,
                        refreshPriority: -1,
                    }
                }
            )
        })

        refresh.restart(true)

        return () => {
            refresh.kill()
            roInner.disconnect()
            roBody.disconnect()
            mm.revert()
        }
    }, [pathname])

    return (
        <div ref={ wrapperRef } className="relative [clip-path:inset(0)]">
            <div ref={ innerRef } className="fixed inset-x-0 bottom-0 bg-black">
                { children }
            </div>
        </div>
    )
}

export default FooterReveal