import AboutHeader from "@/components/landing/about/about-header"
import AboutTags from "@/components/landing/about/about-tags"

const AboutSection = () => {
    return (
        <section className="container space-y-12">
            <AboutHeader />

            <hr className="border-t border-grey-500" />

            <AboutTags />
        </section>
    )
}

export default AboutSection