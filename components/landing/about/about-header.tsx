import AccentText from "@/components/ui/accent-text"
import starImage from "@/assets/star.svg"
import Image from "next/image"

const AboutHeader = () => {
    return (
        <header className="space-y-5 relative">
            <AccentText>
                About me
            </AccentText>

            <div>
                <Image
                    data-about-star
                    src={ starImage }
                    alt="An icon of a blue star"
                    className="relative z-10 float-right -mt-12 md:-mt-18 -mr-10 -ml-1 md:-ml-17 -mb-2 md:-mb-10 w-30 md:w-50 lg:w-auto"
                />

                <h2 data-about-text className="text-2xl/8 sm:text-3xl/9 md:text-4xl/10 lg:text-5xl/14 text-grey-500 text-pretty">
                    Hey, I'm Julia! I spend most of my time building WordPress and WooCommerce sites in Divi.
                    Alongside that I code React and Next.js projects and do UI/UX design in Figma. I also build custom PHP
                    themes and plugins whenever a project needs something beyond page builders.
                </h2>
            </div>
        </header>
    )
}

export default AboutHeader