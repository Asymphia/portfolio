import { Project } from "@/lib/projects"
import SingleProjectDetailLeftPanel from "@/components/single-project/single-project-details-left-panel"
import ProjectImages from "@/components/single-project/project-images"

const SingleProjectDetailsSection = ({ project }: { project: Project }) => {
    return (
        <section className="container grid lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-25 pt-28 sm:pt-32 lg:pt-28 relative items-start">
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