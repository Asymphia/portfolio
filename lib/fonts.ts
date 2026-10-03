import { Albert_Sans, Inter } from "next/font/google"

export const AlbertSansFont = Albert_Sans({
    subsets: ["latin", "latin-ext"],
    variable: "--font-albert-sans",
    display: "swap",
})

export const InterFont = Inter({
    subsets: ["latin", "latin-ext"],
    variable: "--font-inter",
    display: "swap",
})