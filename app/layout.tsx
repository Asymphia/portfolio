import { Metadata } from "next"
import "./globals.css"
import { AlbertSansFont, InterFont } from "@/lib/fonts"
import Footer from "@/components/layout/footer/footer"
import Menu from "@/components/layout/menu/menu"
import Cursor from "@/components/layout/coursor"

export const metadata: Metadata = {
    metadataBase: new URL("https://juliakawa.dev"),
    title: "Julia Kawa | Front-end Developer Developer",
    description: "I design and develop digital products with a strong focus on UX, usability, and conversion. Front-end Developer & UI/UX Designer.",
    openGraph: {
        title: "Julia Kawa | Front-end Developer",
        description: "I design and develop digital products with a strong focus on UX, usability, and conversion. Front-end Developer & UI/UX Designer.",
        url: "https://juliakawa.dev",
        siteName: "Julia Kawa Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Julia Kawa - Front-end Developer Portfolio"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Julia Kawa | Front-end Developer",
        description: "I design and develop digital products with a strong focus on UX, usability, and conversion.",
        images: ["/og-image.png"]
    }
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={`${ AlbertSansFont.variable } ${ InterFont.variable }`}>
            <body>
                <div className="space-y-32 md:space-y-40 lg:space-y-50 relative">
                    <Menu />

                    { children }

                    <Footer />
                </div>

                <Cursor />
            </body>
        </html>
    )
}

export default RootLayout