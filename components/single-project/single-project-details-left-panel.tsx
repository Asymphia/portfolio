import { Project } from "@/lib/projects"
import ProjectDetailTable from "@/components/single-project/project-detail-table"
import Button from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

const SingleProjectDetailLeftPanel = ({ project }: { project: Project }) => {
    return (
        <div className="space-y-15">
            <h1 className="text-8xl">
                { project.title }
            </h1>

            <div className="space-y-7">
                <ProjectDetailTable project={ project } />

                <p>
                    { project.descriptionLong }
                </p>
            </div>

            <div className="flex items-center justify-between">
                <Button style="secondary" icon={ ArrowLeftIcon } iconBeforeText={ true }>
                    All projects
                </Button>

                <Button>
                    Next project
                </Button>
            </div>
        </div>
    )
}

export default SingleProjectDetailLeftPanel