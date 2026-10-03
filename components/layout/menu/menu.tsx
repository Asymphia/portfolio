import Link from "next/link"
import Nav from "@/components/layout/menu/nav"
import Button from "@/components/ui/button"

const Menu = () => {
    return (
        <section className="container fixed left-0 top-0 right-0 flex justify-between items-center mt-4 z-20">
            <Link href="/" className="flex items-center gap-3 bg-background py-px px-2">
                <div className="size-1.5 bg-black rounded-full" />

                <span className="text-black">
                    Julia Kawa
                </span>
            </Link>

            <Nav />

            <Button style="secondary" isSmaller={ true }>
                Get in touch
            </Button>
        </section>
    )
}

export default Menu