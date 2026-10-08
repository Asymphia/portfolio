import Button from "@/components/ui/button"
import Link from "next/link"
import ContactLinks from "@/components/landing/contact/contact-links"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import RollingText from "@/components/ui/rolling-text";

const ContactLeftPanel = () => {
    return (
        <div className="space-y-9 md:space-y-11">
            <div className="space-y-5 md:space-y-6">
                <p>
                    I’m open to front-end developer and UI roles. Send me a few lines about the role and your team,
                    or grab my resume. I reply within two working days.
                </p>

                <Button icon={ ArrowDownTrayIcon } href="/Julia-Kawa_CV.pdf" target="_blank">
                    Download resume
                </Button>
            </div>

            <Link href="mailto:hello@juliakawa.dev" className="block text-black text-lg md:text-xl lg:text-2xl transition-all hover:opacity-80 active:opacity-60">
                <RollingText>
                    <span className="underline underline-offset-4">
                        hello@juliakawa.dev
                    </span>
                </RollingText>
            </Link>

            <ContactLinks />
        </div>
    )
}

export default ContactLeftPanel