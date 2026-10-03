import figma from "@/assets/logos/figma.png"
import gsap from "@/assets/logos/gsap.png"
import react from "@/assets/logos/react.png"
import next from "@/assets/logos/next.png"
import typescript from "@/assets/logos/typescript.png"
import tailwind from "@/assets/logos/tailwind.png"
import wordpress from "@/assets/logos/wordpress.png"
import rootsSage from "@/assets/logos/roots-sage.png"
import acf from "@/assets/logos/acf.png"
import php from "@/assets/logos/php.png"
import Image from "next/image"

const skillstackItems = [
    { icon: figma, alt: "Figma's logo" },
    { icon: gsap, alt: "GSAP's logo" },
    { icon: react, alt: "React's logo" },
    { icon: next, alt: "Next.js's logo" },
    { icon: typescript, alt: "Typescript's logo" },
    { icon: tailwind, alt: "Tailwind's logo" },
    { icon: wordpress, alt: "WordPress's logo" },
    { icon: rootsSage, alt: "Roots Sage's logo" },
    { icon: acf, alt: "ACF's logo" },
    { icon: php, alt: "PHP's logo" },
]

const SkillstackGrid = () => {
    return (
        <div className="grid grid-cols-5 gap-8 ml-42">
            {
                skillstackItems.map(item => (
                    <div className="bg-grey-300 flex items-center justify-center w-full aspect-square rounded-sm" key={ item.alt }>
                        <Image src={ item.icon } alt={ item.alt } key={ item.alt } />
                    </div>
                ))
            }
        </div>
    )
}

export default SkillstackGrid