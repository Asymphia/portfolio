import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import RollingText from "@/components/ui/rolling-text"

const ContactLink = ({ text, href, isFirst=false }: { text: string, href: string, isFirst?: boolean }) => {
    return (
        <Link
            href={ href }
            className={`text-black flex items-center justify-between py-3 px-px border-grey-500 group
                transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 hover:bg-black hover:text-white hover:px-2 active:bg-black/80
                ${ isFirst ? "border-y" : "border-b" }`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <RollingText>
                { text }
            </RollingText>

            <ArrowUpRightIcon className="size-4" />
        </Link>
    )
}

export default ContactLink