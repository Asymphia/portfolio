import Link from "next/link"
import RollingText from "@/components/ui/rolling-text"

const FooterBottomLinks = () => {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <div className="container grid grid-cols-2 md:grid-cols-3 gap-3">
            <p>
                <span className="text-grey-500">
                    Say hi at {" "}
                </span>

                <Link href="mailto:hello@juliakawa.dev" className="text-white transition-all hover:opacity-80 active:opacity-60">
                    <RollingText>
                        hello@juliakawa.dev
                    </RollingText>
                </Link>
            </p>

            <p className="text-white mt-4 md:mt-0 col-span-2 md:col-span-1 order-last md:order-0 mx-auto">
                &copy; { year } All rights reserved
            </p>

            <Link href="/privacy-policy" className="text-white ml-auto transition-all hover:opacity-80 active:opacity-60">
                <RollingText>
                    Privacy Policy
                </RollingText>
            </Link>
        </div>
    )
}

export default FooterBottomLinks