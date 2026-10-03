import { Metadata } from "next"
import "./globals.css"
import { AlbertSansFont, InterFont } from "@/lib/fonts"
import Footer from "@/components/layout/footer/footer"

export const metadata: Metadata = {
    title: "Julia Kawa",
    description: "Font-end developer"
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={`${ AlbertSansFont.variable } ${ InterFont.variable }`}>
            <body className="space-y-50">
                { children }

                <Footer />
            </body>
        </html>
    )
}

export default RootLayout