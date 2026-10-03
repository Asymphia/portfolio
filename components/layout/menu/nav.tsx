import Link from "next/link";

const Nav = () => {
    const links = [
        { title: 'About', href: '/' },
        { title: 'Projects', href: '/' },
        { title: 'Skillstack', href: '/' },
    ]

    return (
        <nav className="space-x-7 bg-background py-px px-2">
            {
                links.map(link => (
                    <Link key={ link.title } href={ link.href } className="text-black">
                        { link.title }
                    </Link>
                ))
            }
        </nav>
    )
}

export default Nav