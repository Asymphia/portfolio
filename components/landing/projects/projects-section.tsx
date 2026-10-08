import StyledHeader from "@/components/ui/styled-header"
import ProjectsGrid from "@/components/projects/projects-grid"
import { projects } from "@/lib/projects"

const ProjectsSection = () => {
    const featured = projects.filter(project => project.isFeatured)

    return (
        <section className="container space-y-10 md:space-y-20">
            <StyledHeader
                header="Selected works crafted with detail & purpose."
                tag="Projects"
                addButton={ true }
                buttonText="View all"
            />

            <ProjectsGrid items={ featured } />
        </section>
    )
}

export default ProjectsSection