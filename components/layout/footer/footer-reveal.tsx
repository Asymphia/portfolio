"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const START_INSET = 4

const FooterReveal = ({ children }: { children: ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current!
        const inner = innerRef.current!

        const syncHeight = () => {
            wrapper.style.height = `${ inner.offsetHeight }px`
            ScrollTrigger.refresh()
        }

        const ro = new ResizeObserver(syncHeight)
        ro.observe(inner)

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
                        scrub: 0.8
                    }
                }
            )
        })

        return () => {
            ro.disconnect()
            mm.revert()
        }
    }, [])

    return (
        <div ref={ wrapperRef } className="relative [clip-path:inset(0)]">
            <div ref={ innerRef } className="fixed inset-x-0 bottom-0 bg-black">
                { children }
            </div>
        </div>
    )
}

export default FooterReveal