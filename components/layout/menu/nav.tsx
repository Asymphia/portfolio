import Link from "next/link"
import RollingText from "@/components/ui/rolling-text"

const Nav = () => {
    const links = [
        { title: 'About', href: '/#about' },
        { title: 'Projects', href: '/projects' },
        { title: 'Skillstack', href: '/#skillstack' },
    ]

    return (
        <nav className="space-x-7 bg-background py-px px-2">
            {
                links.map(link => (
                    <Link key={ link.title } href={ link.href } className="text-black transition-all hover:opacity-80 active:opacity-60">
                        <RollingText>
                            { link.title }
                        </RollingText>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Nav