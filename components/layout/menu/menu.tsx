import Link from "next/link"
import Nav from "@/components/layout/menu/nav"
import Button from "@/components/ui/button"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import RollingText from "@/components/ui/rolling-text"

const Menu = () => {
    return (
        <section className="container fixed left-0 top-0 right-0 flex justify-between items-center mt-4 z-20">
            <Link href="/" className="bg-background py-px px-2 transition-all hover:opacity-80 active:opacity-60">
                <RollingText>
                    <div className="flex items-center gap-3">
                        <div className="size-1.5 bg-black rounded-full" />

                        <span className="text-black">
                            Julia Kawa
                        </span>
                    </div>
                </RollingText>
            </Link>

            <Nav />

            <Button style="secondary" isSmaller={ true } icon={ PaperAirplaneIcon } href="#contact">
                Get in touch
            </Button>
        </section>
    )
}

export default Menu