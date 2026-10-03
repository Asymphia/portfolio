import StyledHeader from "@/components/ui/styledHeader"
import ProjectsGrid from "@/components/projects/projects-grid"

const ProjectsSection = () => {
    return (
        <section className="container space-y-20">
            <StyledHeader
                header="Selected works crafted with detail & purpose."
                tag="Projects"
                addButton={ true }
                buttonText="View all"
            />

            <ProjectsGrid />
        </section>
    )
}

export default ProjectsSection