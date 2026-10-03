import StyledHeader from "@/components/ui/styled-header"
import ContactLeftPanel from "@/components/landing/contact/contact-left-panel"
import ContactForm from "@/components/landing/contact/contact-form"

const ContactSection = () => {
    return (
        <section className="container space-y-15">
            <StyledHeader
                header="Hiring a front-end developer? Let’s talk."
                tag="Contact"
            />

            <div className="grid grid-cols-2 items-start gap-21 ml-38">
                <ContactLeftPanel />
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection