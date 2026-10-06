import Button from "@/components/ui/button"
import Link from "next/link"
import ContactLinks from "@/components/landing/contact/contact-links"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import RollingText from "@/components/ui/rolling-text";

const ContactLeftPanel = () => {
    return (
        <div className="space-y-11">
            <div className="space-y-6">
                <p>
                    I’m open to front-end developer and UI roles. Send me a few lines about the role and your team,
                    or grab my resume. I reply within two working days.
                </p>

                <Button icon={ ArrowDownTrayIcon }>
                    Download resume
                </Button>
            </div>

            <Link href="#" className="block text-black text-2xl underline underline-offset-4">
                hello@juliakawa.dev
            </Link>

            <ContactLinks />
        </div>
    )
}

export default ContactLeftPanel