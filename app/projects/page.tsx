import ProjectsSection from "@/components/projects/sections/projects-section"
import ProjectsHero from "@/components/projects/sections/projects-hero"
import ContactSection from "@/components/landing/contact/contact-section"

const ProjectsPage = () => {
    return (
        <main className="space-y-32 md:space-y-40 lg:space-y-50">
            <ProjectsHero />
            <ProjectsSection />
            <ContactSection />
        </main>
    )
}

export default ProjectsPage