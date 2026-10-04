import { Project } from "@/lib/projects"
import Tag from "@/components/ui/tag"
import Image from "next/image"

const SingleProject = ({ item, className }: { item: Project, className?: string }) => {
    return (
        <div data-project className={`space-y-6 ${ className }`}>
            <Image src={ className === "col-span-2" && item.featuredImageWide ? item.featuredImageWide : item.featuredImage } alt={`${item.title}'s page`} className="rounded-sm drop-shadow-xs" />

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
                    { item.descriptionShort }
                </p>
            </div>
        </div>
    )
}

export default SingleProject