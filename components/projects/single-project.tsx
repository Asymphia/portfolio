import { Project } from "@/lib/projects"
import Tag from "@/components/ui/tag"
import Image from "next/image"
import Link from "next/link"

const SingleProject = ({ item, className }: { item: Project, className?: string }) => {
    return (
        <Link href={`/projects/${ item.slug}`} data-project className={`space-y-6 ${ className }`}>
            <Image
                src={ item.featuredImage }
                alt={`${item.title}'s page`}
                className="rounded-sm drop-shadow-xs border border-grey-300"
            />

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
        </Link>
    )
}

export default SingleProject