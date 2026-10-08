import tqmSoft from "@/assets/projects/tqm-soft.png"
import inLove from "@/assets/projects/in-love.png"
import qlio from "@/assets/projects/qlio.png"
import rehab from "@/assets/projects/rehab.png"
import omega from "@/assets/projects/omega.png"
import sportRes from "@/assets/projects/sport-res.png"

import Marquee from "@/components/ui/marquee"
import Image from "next/image"

const slides = [
    { image: tqmSoft, alt: "Screenshot of a TQM Soft's website" },
    { image: inLove, alt: "Screenshot of a In Love's website" },
    { image: qlio, alt: "Screenshot of a QLIO's website" },
    { image: rehab, alt: "Screenshot of a Rehab Pro's website" },
    { image: omega, alt: "Screenshot of a Omega Rental's website" },
    { image: sportRes, alt: "Screenshot of a Sport Res' website" },
]

const SliderSection = () => {
    return (
        <section>
            <Marquee gap="clamp(1rem, 3vw, 2rem)" className="[&:hover_.slide:not(:hover)]:opacity-50">
                {
                    slides.map(slide => (
                        <div key={ slide.alt } className="slide group shrink-0 transition-opacity duration-500 ease-out w-[75vw] sm:w-[45vw] lg:w-[calc((100vw-4rem)/3)]">
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src={ slide.image }
                                    alt={ slide.alt }
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 75vw"
                                    draggable={ false }
                                    className="w-full transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                />
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </section>
    )
}

export default SliderSection