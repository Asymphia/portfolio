import { StaticImageData } from "next/image"

import silva from "@/assets/projects/silva.png"
import sportRes from "@/assets/projects/sport-res.png"
import omega from "@/assets/projects/omega.png"
import tqmSoft from "@/assets/projects/tqm-soft.png"
import qlio from "@/assets/projects/qlio.png"
import qlioWide from "@/assets/projects/qlio-wide.png"
import rehab from "@/assets/projects/rehab.png"
import pasieka from "@/assets/projects/pasieka.png"
import rozanska from "@/assets/projects/rozanska.png"
import inLove from "@/assets/projects/in-love.png"
import inLoveWide from "@/assets/projects/in-love-wide.png"

export type Project = {
    id: number
    slug: string
    title: string
    descriptionShort: string
    descriptionLong: string
    tags: string[]
    featuredImage: StaticImageData
    featuredImageWide?: StaticImageData
    images?: StaticImageData[]
    year: number
    role: string
    isFeatured: boolean
    links?: {
        websiteLink?: string
        pluginRepoLink?: string
        projectRepoLink?: string
    }
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "metoda-silvy-polska",
        title: "Metoda Silvy Polska",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "Custom WordPress Plugin", "ACF", "PHP"],
        featuredImage: silva,
        year: 2026,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://metodasilvypolska.pl"
        }
    },
    {
        id: 2,
        slug: "sport-res",
        title: "Sport-Res",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "WooCommerce", "Design", "Motion Design"],
        featuredImage: sportRes,
        year: 2026,
        role: "WordPress Developer",
        isFeatured: false
    },
    {
        id: 3,
        slug: "omega-rental",
        title: "Omega Rental",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "WooCommerce", "ACF", "Design"],
        featuredImage: omega,
        year: 2026,
        role: "WordPress Developer",
        isFeatured: false,
        links: {
            websiteLink: "https://omega-rental.com.pl/"
        }
    },
    {
        id: 4,
        slug: "tqm-soft",
        title: "TQM Soft",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Roots Sage", "Custom Theme", "SCSS", "PHP", "WooCommerce"],
        featuredImage: tqmSoft,
        year: 2025,
        role: "Front-end Developer",
        isFeatured: true
    },
    {
        id: 5,
        slug: "qlio",
        title: "QLIO",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "Motion Design"],
        featuredImage: qlio,
        featuredImageWide: qlioWide,
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://qliopanel.com/"
        }
    },
    {
        id: 6,
        slug: "rehab-pro",
        title: "Rehab-Pro",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design"],
        featuredImage: rehab,
        year: 2025,
        role: "WordPress Developer",
        isFeatured: false,
        links: {
            websiteLink: "https://rehab-pro.pl/"
        }
    },
    {
        id: 7,
        slug: "stefanek-apairy",
        title: "Stefanek Apairy",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "WooCommerce"],
        featuredImage: pasieka,
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://pasiekastefanek.pl/"
        }
    },
    {
        id: 8,
        slug: "ewa-rozanska",
        title: "Ewa Różańska",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "WooCommerce", "Custom Plugin", "PHP", "React"],
        featuredImage: rozanska,
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://ewarozanska.pl/",
            pluginRepoLink: "https://github.com/Asymphia/OverpayCalculatorPlugin"
        }
    },
    {
        id: 9,
        slug: "in-love",
        title: "In Love Wedding Dresses",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "Motion Design"],
        featuredImage: inLove,
        featuredImageWide: inLoveWide,
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://studiomodyinlove.pl/"
        }
    },
]