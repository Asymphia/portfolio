import ContactLink from "@/components/landing/contact/contact-link"

const links = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/julia-kawa-a88809435" },
    { title: "GitHub", link: "https://github.com/Asymphia" }
]

const ContactLinks = () => {
    return (
        <div className="space-y-3">
            <p className="text-sm">
                Find me elsewhere
            </p>

            <div>
                {
                    links.map((link, index) => (
                        <ContactLink key={ link.title } text={ link.title } href={ link.link } isFirst={ index === 0 } />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactLinks