import Input from "@/components/ui/input"
import Select from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import Button from "@/components/ui/button"

const ContactForm = () => {
    return (
        <form className="grid grid-cols-2 gap-5">
            <Input
                name="name"
                type="text"
                placeholder="Jan Kowalski"
                label="Name"
            />

            <Input
                name="email"
                type="email"
                placeholder="jan@company.com"
                label="E-mail"
            />

            <Input
                name="company"
                type="text"
                placeholder="Company"
                label="Company name"
            />

            <Input
                name="link"
                type="url"
                placeholder="https://company.com"
                label="Link to the offer"
                required={ false }
            />

            <Select
                name="role"
                label="Which role?"
                className="col-span-2"
                options={["WordPress Page Builder", "Advanced WordPress", "React / Next.js", "UI/UX Designer", "Internship", "Other"]}
            />

            <Textarea
                label="Message"
                name="message"
                className="col-span-2"
                placeholder="The role, the team, the stack and how the hiring process works."
                required={ false }
            />

            <Button className="col-span-2 ml-auto">
                Send message
            </Button>
        </form>
    )
}

export default ContactForm