import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const ContactLink = ({ text, href, isFirst=false }: { text: string, href: string, isFirst?: boolean }) => {
    return (
        <Link href={ href } className={`text-black flex items-center justify-between py-3 px-px border-grey-500 ${ isFirst ? "border-y" : "border-b" }`}>
            { text }

            <ArrowUpRightIcon className="size-4" />
        </Link>
    )
}

export default ContactLink