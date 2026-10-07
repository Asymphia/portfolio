import { Metadata } from "next"
import "./globals.css"
import { AlbertSansFont, InterFont } from "@/lib/fonts"
import Footer from "@/components/layout/footer/footer"
import Menu from "@/components/layout/menu/menu"
import Cursor from "@/components/layout/coursor"

export const metadata: Metadata = {
    title: "Julia Kawa",
    description: "Font-end developer"
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={`${ AlbertSansFont.variable } ${ InterFont.variable }`}>
            <body>
                <div className="space-y-50 relative">
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