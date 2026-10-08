import AboutHeader from "@/components/landing/about/about-header"
import AboutTags from "@/components/landing/about/about-tags"
import AboutScroll from "./about-scroll"

const AboutSection = () => {
    return (
        <AboutScroll id="about">
            <div className="container space-y-8 md:space-y-12">
                <AboutHeader />

                <hr className="border-t border-grey-500" />

                <AboutTags />
            </div>
        </AboutScroll>
    )
}

export default AboutSection