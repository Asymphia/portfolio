import { Metadata } from "next"
import "./globals.css"
import { AlbertSansFont, InterFont } from "@/lib/fonts"

export const metadata: Metadata = {
    title: "Julia Kawa",
    description: "Font-end developer"
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={`${ AlbertSansFont.variable } ${ InterFont.variable }`}>
            <body>
                { children }
            </body>
        </html>
    )
}

export default RootLayout