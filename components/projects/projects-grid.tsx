import SingleProject from "@/components/projects/single-project"
import { projects } from "@/lib/projects"
import ProjectsReveal from "./projects-reveal"

const ProjectsGrid = () => {
    const featured = projects.filter(project => project.isFeatured)

    return (
        <ProjectsReveal className="grid grid-cols-2 gap-20">
            {
                featured.map((project, key) => (
                    <SingleProject key={ project.title } item={ project } className={ key % 3 === 2 ? "col-span-2" : "" } />
                ))
            }
        </ProjectsReveal>
    )
}

export default ProjectsGrid