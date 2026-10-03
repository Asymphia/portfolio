import Link from "next/link"

const FooterBottomLinks = () => {
    return (
        <div className="container grid grid-cols-3">
            <p>
                <span className="text-grey-500">
                    Say hi at {" "}
                </span>

                <Link href="#" className="text-white">
                    hello@juliakawa.dev
                </Link>
            </p>

            <p className="text-white mx-auto">
                &copy; 2026 All rights reserved
            </p>

            <Link href="#" className="text-white ml-auto">
                Privacy Policy
            </Link>
        </div>
    )
}

export default FooterBottomLinks