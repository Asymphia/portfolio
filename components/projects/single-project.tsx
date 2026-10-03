import { project } from "@/components/projects/projects-grid"
import Tag from "@/components/ui/tag"

const SingleProject = ({ item, className }: { item: project, className?: string }) => {
    return (
        <div className={`space-y-6 ${ className }`}>
            <div className="h-100 w-full bg-grey-300 rounded-sm" />

            <div className="flex flex-wrap gap-3">
                {
                    item.tags.map((tag, index) => (
                        <Tag key={ index } text={ tag } size="small" />
                    ))
                }
            </div>

            <div className="space-y-3">
                <h3 className="text-5xl">
                    { item.title }
                </h3>

                <p>
                    { item.description }
                </p>
            </div>
        </div>
    )
}

export default SingleProject