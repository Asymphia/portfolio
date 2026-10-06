import { Project } from "@/lib/projects"
import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Tag from "../ui/tag"

type DetailRow = {
    tag: string
    value: string | number
    href?: string
}

const ProjectDetailTable = ({ project }: { project: Project }) => {
    const elements: DetailRow[] = [
        { tag: "Year", value: project.year },
        { tag: "Role", value: project.role },
        ...(project.links?.websiteLink
            ? [{ tag: "Website", value: "View website", href: project.links.websiteLink }]
            : []),
        ...(project.links?.pluginRepoLink
            ? [{ tag: "Plugin", value: "View repo", href: project.links.pluginRepoLink }]
            : []),
        ...(project.links?.projectRepoLink
            ? [{ tag: "Project", value: "View repo", href: project.links.projectRepoLink }]
            : []),
    ]

    return (
        <div>
            {
                elements.map((element, i) => (
                    element.value && (
                        <div key={ i } className={`flex items-center justify-between py-4 ${ i === 0 ? "border-y" : "border-b" } border-grey-300`}>
                            <p>
                                { element.tag }
                            </p>

                            {
                                element.href ? (
                                    <Link href={ element.href } className="font-semibold flex items-center gap-2">
                                        { element.value }

                                        <ArrowUpRightIcon className="size-5 stroke-2" />
                                    </Link>
                                ) : (
                                <p className="font-semibold">
                                    { element.value }
                                </p>
                                )
                            }
                        </div>
                    )
                ))
            }

            <div className="border-b border-grey-300 py-4 flex flex-wrap items-center gap-3">
                {
                    project.tags.map(tag => (
                        <Tag text={ tag } key={ tag } size="small" />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectDetailTable