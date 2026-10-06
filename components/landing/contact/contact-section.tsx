import StyledHeader from "@/components/ui/styled-header"
import ContactLeftPanel from "@/components/landing/contact/contact-left-panel"
import ContactForm from "@/components/landing/contact/contact-form"
import FadeIn from "@/components/ui/fade-in"

const ContactSection = () => {
    return (
        <section className="container space-y-15" id="contact">
            <StyledHeader
                header="Hiring a front-end developer? Let’s talk."
                tag="Contact"
            />

            <FadeIn className="grid grid-cols-2 items-start gap-21 ml-38">
                <ContactLeftPanel />
                <ContactForm />
            </FadeIn>
        </section>
    )
}

export default ContactSection