import HeroSection from "@/components/landing/hero/hero-section"
import SliderSection from "@/components/landing/slider/slider-section"
import AboutSection from "@/components/landing/about/about-section"
import ProjectsSection from "@/components/landing/projects/projects-section"
import CircleSection from "@/components/landing/circle/circle-section"
import SkillstackSection from "@/components/landing/skillstack/skillstack-section"
import VisualSection from "@/components/landing/visual/visual-section"
import ContactSection from "@/components/landing/contact/contact-section"

const LandingPage = () => {
    return (
        <main className="space-y-32 md:space-y-40 lg:space-y-50">
            <HeroSection />
            <SliderSection />
            <AboutSection />
            <ProjectsSection />
            <CircleSection />
            <SkillstackSection />
            <VisualSection />
            <ContactSection />
        </main>
    )
}

export default LandingPage