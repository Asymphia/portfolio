import HeroSection from "@/components/landing/hero/hero-section"
import SliderSection from "@/components/landing/slider/slider-section"
import AboutSection from "@/components/landing/about/about-section"

const LandingPage = () => {
    return (
        <main className="space-y-50">
            <HeroSection />
            <SliderSection />
            <AboutSection />
        </main>
    )
}

export default LandingPage