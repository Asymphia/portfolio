import { Project } from "@/lib/projects"
import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Tag from "../ui/tag"
import RollingText from "@/components/ui/rolling-text"

type DetailRow = {
    tag: string
    value: string | number
    href?: string
}

const Line = ({ position }: { position: "top" | "bottom" }) => (
    <span
        data-reveal="line"
        className={`absolute left-0 h-px w-full bg-grey-300 ${ position === "top" ? "top-0" : "bottom-0" }`}
    />
)

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
        ...(project.links?.projectDownloadLink
            ? [{ tag: "Download", value: "Download app", href: project.links.projectDownloadLink }]
            : []),
    ]

    return (
        <div>
            {
                elements.map((element, i) => (
                    element.value && (
                        <div key={ i } className="relative flex items-center justify-between py-4">
                            {
                                i === 0 && <Line position="top" />
                            }

                            <Line position="bottom" />

                            <p data-reveal="cell">
                                { element.tag }
                            </p>

                            {
                                element.href ? (
                                    <Link href={ element.href } className="font-semibold transition-all hover:opacity-80 active:opacity-60" target="_blank">
                                        <RollingText>
                                            <div className="flex items-center gap-2">
                                                <span data-reveal="cell">
                                                    { element.value }
                                                </span>

                                                <ArrowUpRightIcon data-reveal="item" className="size-5 stroke-2" />
                                            </div>
                                        </RollingText>
                                    </Link>
                                ) : (
                                    <p data-reveal="cell" className="font-semibold">
                                        { element.value }
                                    </p>
                                )
                            }
                        </div>
                    )
                ))
            }

            <div className="relative py-4 flex flex-wrap items-center gap-3">
                <Line position="bottom" />

                {
                    project.tags.map(tag => (
                        <span key={ tag } data-reveal="item">
                            <Tag text={ tag } size="small" />
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectDetailTable