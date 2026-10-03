import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Julia Kawa",
    description: "Font-end developer"
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}

export default RootLayout