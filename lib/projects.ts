import { StaticImageData } from "next/image"

import silva from "@/assets/projects/silva.png"
import silva1 from "@/assets/projects-screenshots/silva/silva1.png"
import silva2 from "@/assets/projects-screenshots/silva/silva2.png"
import silva3 from "@/assets/projects-screenshots/silva/silva3.png"
import silva4 from "@/assets/projects-screenshots/silva/silva4.png"
import silva5 from "@/assets/projects-screenshots/silva/silva5.png"

import sportRes from "@/assets/projects/sport-res.png"
import sportRes1 from "@/assets/projects-screenshots/sport-res/sportres1.png"
import sportRes2 from "@/assets/projects-screenshots/sport-res/sportres2.png"
import sportRes3 from "@/assets/projects-screenshots/sport-res/sportres3.png"
import sportRes4 from "@/assets/projects-screenshots/sport-res/sportres4.png"
import sportRes5 from "@/assets/projects-screenshots/sport-res/sportres5.png"
import sportRes6 from "@/assets/projects-screenshots/sport-res/sportres6.png"

import omega from "@/assets/projects/omega.png"
import omega1 from "@/assets/projects-screenshots/omega/omega1.png"
import omega2 from "@/assets/projects-screenshots/omega/omega2.png"
import omega3 from "@/assets/projects-screenshots/omega/omega3.png"
import omega4 from "@/assets/projects-screenshots/omega/omega4.png"
import omega5 from "@/assets/projects-screenshots/omega/omega5.png"

import tqmSoft from "@/assets/projects/tqm-soft.png"
import tqmSoft1 from "@/assets/projects-screenshots/tqm/tqm-soft1.png"
import tqmSoft2 from "@/assets/projects-screenshots/tqm/tqm-soft2.png"
import tqmSoft3 from "@/assets/projects-screenshots/tqm/tqm-soft3.png"
import tqmSoft4 from "@/assets/projects-screenshots/tqm/tqm-soft4.png"
import tqmSoft5 from "@/assets/projects-screenshots/tqm/tqm-soft5.png"
import tqmSoft6 from "@/assets/projects-screenshots/tqm/tqm-soft6.png"

import qlio from "@/assets/projects/qlio.png"
import qlioWide from "@/assets/projects/qlio-wide.png"

import rehab from "@/assets/projects/rehab.png"
import rehab1 from "@/assets/projects-screenshots/rehab/rehab1.png"
import rehab2 from "@/assets/projects-screenshots/rehab/rehab2.png"
import rehab3 from "@/assets/projects-screenshots/rehab/rehab3.png"
import rehab4 from "@/assets/projects-screenshots/rehab/rehab4.png"
import rehab5 from "@/assets/projects-screenshots/rehab/rehab5.png"
import rehab6 from "@/assets/projects-screenshots/rehab/rehab6.png"

import pasieka from "@/assets/projects/pasieka.png"
import pasieka1 from "@/assets/projects-screenshots/pasieka/pasieka1.png"
import pasieka2 from "@/assets/projects-screenshots/pasieka/pasieka2.png"
import pasieka3 from "@/assets/projects-screenshots/pasieka/pasieka3.png"
import pasieka4 from "@/assets/projects-screenshots/pasieka/pasieka4.png"
import pasieka5 from "@/assets/projects-screenshots/pasieka/pasieka5.png"

import rozanska from "@/assets/projects/rozanska.png"
import rozanska1 from "@/assets/projects-screenshots/rozanska/rozanska1.png"
import rozanska2 from "@/assets/projects-screenshots/rozanska/rozanska2.png"
import rozanska3 from "@/assets/projects-screenshots/rozanska/rozanska3.png"
import rozanska4 from "@/assets/projects-screenshots/rozanska/rozanska4.png"
import rozanska5 from "@/assets/projects-screenshots/rozanska/rozanska5.png"
import rozanska6 from "@/assets/projects-screenshots/rozanska/rozanska6.png"
import rozanska7 from "@/assets/projects-screenshots/rozanska/rozanska7.png"
import rozanska8 from "@/assets/projects-screenshots/rozanska/rozanska8.png"
import rozanska9 from "@/assets/projects-screenshots/rozanska/rozanska9.png"

import inLove from "@/assets/projects/in-love.png"
import inLoveWide from "@/assets/projects/in-love-wide.png"
import inLove1 from "@/assets/projects-screenshots/in-love/in-love1.png"
import inLove2 from "@/assets/projects-screenshots/in-love/in-love2.png"
import inLove3 from "@/assets/projects-screenshots/in-love/in-love3.png"
import inLove4 from "@/assets/projects-screenshots/in-love/in-love4.png"

import musicshare from "@/assets/projects/musicshare.png"

import postcards from "@/assets/projects/postcards.png"
import postcards1 from "@/assets/projects-screenshots/postcards/postcards1.png"
import postcards2 from "@/assets/projects-screenshots/postcards/postcards2.png"
import postcards3 from "@/assets/projects-screenshots/postcards/postcards3.png"
import postcards4 from "@/assets/projects-screenshots/postcards/postcards4.png"

import scribre from "@/assets/projects/scribre.png"
import scribre1 from "@/assets/projects-screenshots/scribre/scribre1.png"
import scribre2 from "@/assets/projects-screenshots/scribre/scribre2.png"
import scribre22 from "@/assets/projects-screenshots/scribre/scribre2-2.png"
import scribre3 from "@/assets/projects-screenshots/scribre/scribre3.png"
import scribre4 from "@/assets/projects-screenshots/scribre/scribre4.png"
import scribre5 from "@/assets/projects-screenshots/scribre/scribre5.png"
import scribre6 from "@/assets/projects-screenshots/scribre/scribre6.png"
import scribre7 from "@/assets/projects-screenshots/scribre/scribre7.png"
import scribre8 from "@/assets/projects-screenshots/scribre/scribre8.png"

export type ProjectImage = {
    image: StaticImageData
    alt: string
}

export type Project = {
    id: number
    slug: string
    title: string
    descriptionShort: string
    descriptionLong: string
    tags: string[]
    featuredImage: StaticImageData
    featuredImageWide?: StaticImageData
    images?: ProjectImage[]
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
        tags: ["WordPress", "Divi Builder", "Design", "WordPress Plugin", "ACF", "PHP"],
        featuredImage: silva,
        images: [
            { image: silva1, alt: "Metoda Silvy Polska website -  hero" },
            { image: silva2, alt: "Metoda Silvy Polska website - discover courses" },
            { image: silva3, alt: "Metoda Silvy Polska website - courses dates" },
            { image: silva4, alt: "Metoda Silvy Polska website - single course" },
            { image: silva5, alt: "Metoda Silvy Polska website - lecturers" }
        ],
        year: 2026,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://metodasilvypolska.pl",
            pluginRepoLink: "https://github.com/Asymphia/wp-courses-manager"
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
        images: [
            { image: sportRes1, alt: "Sport-Res website -  hero" },
            { image: sportRes2, alt: "Sport-Res website - popular categories" },
            { image: sportRes3, alt: "Sport-Res website - shop" },
            { image: sportRes4, alt: "Sport-Res website - single product" },
            { image: sportRes5, alt: "Sport-Res website - single product description" },
            { image: sportRes6, alt: "Sport-Res website - about us" }
        ],
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
        images: [
            { image: omega1, alt: "Omega Rental website -  hero" },
            { image: omega2, alt: "Omega Rental website - shop" },
            { image: omega3, alt: "Omega Rental website - single product" },
            { image: omega4, alt: "Omega Rental website - rental" },
            { image: omega5, alt: "Omega Rental website - single rental product" }
        ],
        year: 2026,
        role: "WordPress Developer",
        isFeatured: false,
        links: {
            websiteLink: "https://omega-rental.com.pl/"
        }
    },
    {
        id: 4,
        slug: "scribre",
        title: "Scribre",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["Next.js", "TypeScript", "Design"],
        featuredImage: scribre,
        images: [
            { image: scribre1, alt: "Scribre website -  login" },
            { image: scribre2, alt: "Scribre website - dashboard" },
            { image: scribre22, alt: "Scribre website - dashboard continuation" },
            { image: scribre3, alt: "Scribre website - folders" },
            { image: scribre4, alt: "Scribre website - notes" },
            { image: scribre5, alt: "Scribre website - editing a note" },
            { image: scribre6, alt: "Scribre website - editing a note continuation" },
            { image: scribre7, alt: "Scribre website - adding new note" },
            { image: scribre8, alt: "Scribre website - adding new folder" },
        ],
        year: 2026,
        role: "Front-end developer & UI/UX designer",
        isFeatured: false,
        links: {
            projectRepoLink: "https://github.com/Asymphia/scribre"
        }
    },
    {
        id: 5,
        slug: "postcards-never-sent",
        title: "Postcards never sent",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["Next.js", "TypeScript", "GSAP", "Design"],
        featuredImage: postcards,
        images: [
            { image: postcards1, alt: "Postcards never sent website -  hero" },
            { image: postcards2, alt: "Postcards never sent website - creating postcard" },
            { image: postcards3, alt: "Postcards never sent website - selecting stamp" },
            { image: postcards4, alt: "Postcards never sent website - success modal" }
        ],
        year: 2026,
        role: "Front-end developer & UI/UX designer",
        isFeatured: false,
        links: {
            websiteLink: "https://postcards-never-sent.vercel.app/",
            projectRepoLink: "https://github.com/Asymphia/postcards-never-sent"
        }
    },
    {
        id: 6,
        slug: "tqm-soft",
        title: "TQM Soft",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Roots Sage", "Custom Theme", "SCSS", "PHP", "WooCommerce"],
        featuredImage: tqmSoft,
        images: [
            { image: tqmSoft1, alt: "TQM Soft website -  hero" },
            { image: tqmSoft2, alt: "TQM Soft website - megamenu 1" },
            { image: tqmSoft3, alt: "TQM Soft website - megamenu 2" },
            { image: tqmSoft4, alt: "TQM Soft website - knowledge base" },
            { image: tqmSoft5, alt: "TQM Soft website - qnowhow" },
            { image: tqmSoft6, alt: "TQM Soft website - about us" },
        ],
        year: 2025,
        role: "Front-end Developer",
        isFeatured: true
    },
    {
        id: 7,
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
        id: 8,
        slug: "rehab-pro",
        title: "Rehab-Pro",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design"],
        featuredImage: rehab,
        images: [
            { image: rehab1, alt: "Rehab-Pro website -  hero" },
            { image: rehab2, alt: "Rehab-Pro website - rehabilitation methods" },
            { image: rehab3, alt: "Rehab-Pro website - team" },
            { image: rehab4, alt: "Rehab-Pro website - beauty treatments" },
            { image: rehab5, alt: "Rehab-Pro website - diagnostics" },
            { image: rehab6, alt: "Rehab-Pro website - rehabilitation methods page" },
        ],
        year: 2025,
        role: "WordPress Developer",
        isFeatured: false,
        links: {
            websiteLink: "https://rehab-pro.pl/"
        }
    },
    {
        id: 9,
        slug: "pasieka-stefanek",
        title: "Pasieka Stefanek",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "WooCommerce"],
        featuredImage: pasieka,
        images: [
            { image: pasieka1, alt: "Pasieka Stefanek website -  hero" },
            { image: pasieka2, alt: "Pasieka Stefanek website - about us" },
            { image: pasieka3, alt: "Pasieka Stefanek website - shop" },
            { image: pasieka4, alt: "Pasieka Stefanek website - single product" },
            { image: pasieka5, alt: "Pasieka Stefanek website - basket" }
        ],
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://pasiekastefanek.pl/"
        }
    },
    {
        id: 10,
        slug: "ewa-rozanska",
        title: "Ewa Różańska",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "WooCommerce", "WordPress Plugin", "PHP", "React"],
        featuredImage: rozanska,
        images: [
            { image: rozanska1, alt: "Ewa Różańska website -  hero" },
            { image: rozanska2, alt: "Ewa Różańska website - shop" },
            { image: rozanska3, alt: "Ewa Różańska website - single product" },
            { image: rozanska4, alt: "Ewa Różańska website - shop landing hero" },
            { image: rozanska5, alt: "Ewa Różańska website - shop landing" },
            { image: rozanska6, alt: "Ewa Różańska website - shop landing 2" },
            { image: rozanska7, alt: "Ewa Różańska website - overpayment calculator" },
            { image: rozanska8, alt: "Ewa Różańska website - overpayment calculator results" },
            { image: rozanska9, alt: "Ewa Różańska website - refinancing calculator" },
        ],
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://ewarozanska.pl/",
            pluginRepoLink: "https://github.com/Asymphia/OverpayCalculatorPlugin"
        }
    },
    {
        id: 11,
        slug: "musicshare",
        title: "MusicShare",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["React", "TypeScript", "Design", "Spotify"],
        featuredImage: musicshare,
        year: 2025,
        role: "React Developer & UI/UX Designer",
        isFeatured: false,
        links: {
            projectRepoLink: "https://github.com/Asymphia/MusicShare"
        }
    },
    {
        id: 12,
        slug: "in-love",
        title: "In Love",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat. Donec odio tortor, aliquet sit amet tristique in, molestie eget quam. Donec vehicula arcu nulla, semper facilisis sapien imperdiet ut. Praesent condimentum eros risus, quis dapibus mauris porttitor at. Integer sit amet magna arcu.",
        tags: ["WordPress", "Divi Builder", "Design", "Motion Design"],
        featuredImage: inLove,
        featuredImageWide: inLoveWide,
        images: [
            { image: inLove1, alt: "In Love Wedding Dresses website -  hero" },
            { image: inLove2, alt: "In Love Wedding Dresses website - about us" },
            { image: inLove3, alt: "In Love Wedding Dresses website - collections" },
            { image: inLove4, alt: "In Love Wedding Dresses website - contact" }
        ],
        year: 2025,
        role: "WordPress Developer",
        isFeatured: true,
        links: {
            websiteLink: "https://studiomodyinlove.pl/"
        }
    },
]