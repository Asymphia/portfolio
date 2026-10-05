import StyledHeader from "@/components/ui/styled-header"
import ProjectsGrid from "@/components/projects/projects-grid"
import { projects } from "@/lib/projects"

const ProjectsSection = () => {
    return (
        <section className="container space-y-22 pt-15 border-t border-grey-300">
            <StyledHeader
                header="Selected work exploring ideas, challenges, and solutions."
                tag="Projects"
                addText={ true }
            />

            <ProjectsGrid items={ projects } />
        </section>
    )
}

export default ProjectsSection