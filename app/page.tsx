import HeroSection from "@/components/landing/hero/hero-section"
import SliderSection from "@/components/landing/slider/slider-section"
import AboutSection from "@/components/landing/about/about-section"
import ProjectsSection from "@/components/landing/projects/projects-section"
import CircleSection from "@/components/landing/circle/circle-section"

const LandingPage = () => {
    return (
        <main className="space-y-50">
            <HeroSection />
            <SliderSection />
            <AboutSection />
            <ProjectsSection />
            <CircleSection />
        </main>
    )
}

export default LandingPage