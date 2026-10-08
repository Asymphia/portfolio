import {Project, projects} from "@/lib/projects"
import ProjectDetailTable from "@/components/single-project/project-detail-table"
import Button from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import PanelReveal from "@/components/single-project/panel-reveal"

const SingleProjectDetailLeftPanel = ({ project }: { project: Project }) => {
    const nextProjectSlug = projects.filter(item => item.id === project.id + 1)[0]?.slug

    return (
        <PanelReveal className="space-y-13 md:space-y-15 lg:sticky lg:top-28 self-start h-fit">
            <h1 data-reveal="title" className="text-6xl md:text-7xl xl:text-8xl">
                { project.title }
            </h1>

            <div className="space-y-5 md:space-y-7">
                <ProjectDetailTable project={ project } />

                <p data-reveal="text">
                    { project.descriptionLong }
                </p>
            </div>

            <div data-reveal="cta" className="flex items-center justify-between gap-2">
                <Button style="secondary" icon={ ArrowLeftIcon } iconBeforeText={ true } href="/projects">
                    All projects
                </Button>

                <Button href={`/projects/${ nextProjectSlug }`} disabled={ !nextProjectSlug }>
                    Next project
                </Button>
            </div>
        </PanelReveal>
    )
}

export default SingleProjectDetailLeftPanel