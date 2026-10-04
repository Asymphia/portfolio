import SingleProject from "@/components/projects/single-project"
import { projects } from "@/lib/projects"

const ProjectsGrid = () => {
    const featured = projects.filter(project => project.isFeatured)

    return (
        <div className="grid grid-cols-2 gap-18">
            {
                featured.map((project, key) => (
                    <SingleProject key={ project.title } item={ project } className={`${ key % 3 === 2 ? "col-span-2" : "" }`} />
                ))
            }
        </div>
    )
}

export default ProjectsGrid