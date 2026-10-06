"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ProjectImage } from "@/lib/projects"
import Image from "next/image"
import ProjectsReveal from "@/components/projects/projects-reveal"

gsap.registerPlugin(ScrollTrigger)

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    const wrappersRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const wrappers = wrappersRef.current
        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            wrappers.forEach(wrapper => {
                gsap.to(wrapper, {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 92%",
                        once: true,
                    },
                })
            })
        })

        mm.add("(prefers-reduced-motion: reduce)", () => {
            gsap.set(wrappers, { opacity: 1 })
        })

        return () => mm.revert()
    }, [])

    return (
        <ProjectsReveal className="space-y-8">
            {
                images.map((image, index) => (
                    <div
                        key={ image.alt }
                        ref={ el => { if (el) wrappersRef.current[index] = el } }
                        className="opacity-0"
                    >
                        <Image
                            data-project
                            src={ image.image }
                            alt={ image.alt }
                            className="w-full rounded-md drop-shadow-xs border border-grey-300"
                        />
                    </div>
                ))
            }
        </ProjectsReveal>
    )
}

export default ProjectImages