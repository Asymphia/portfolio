import { Project } from "@/lib/projects"
import SingleProjectDetailLeftPanel from "@/components/single-project/single-project-details-left-panel"
import ProjectImages from "@/components/single-project/project-images"

const SingleProjectDetailsSection = ({ project }: { project: Project }) => {
    return (
        <section className="container grid grid-cols-2 gap-25 pt-28">
            <SingleProjectDetailLeftPanel project={ project } />

            {
                project.images && (
                    <ProjectImages images={ project.images } />
                )
            }
        </section>
    )
}

export default SingleProjectDetailsSection