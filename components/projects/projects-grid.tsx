import SingleProject from "@/components/projects/single-project"
import { Project } from "@/lib/projects"
import ProjectsReveal from "./projects-reveal"

const ProjectsGrid = ({ items }: { items: Project[] }) => {
    return (
        <ProjectsReveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-8 lg:gap-y-14 xl:gap-20">
            {
                items.map((project, key) => (
                    <SingleProject key={ project.title } item={ project } className={ key % 3 === 2 ? "lg:col-span-2" : "" } />
                ))
            }
        </ProjectsReveal>
    )
}

export default ProjectsGrid