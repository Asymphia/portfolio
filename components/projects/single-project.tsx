import { Project } from "@/lib/projects"
import Tag from "@/components/ui/tag"
import Image from "next/image"
import Link from "next/link"
import RollingText from "@/components/ui/rolling-text";

const SingleProject = ({ item, className = "" }: { item: Project, className?: string }) => {
    return (
        <Link href={`/projects/${ item.slug}`} data-project className={`space-y-4 md:space-y-6 ${ className } group`} data-cursor="view project">
            <Image
                src={ item.featuredImage }
                alt={`${item.title}'s page`}
                className="rounded-sm drop-shadow-xs border border-grey-300"
            />

            <div className="flex flex-wrap gap-2 xl:gap-3">
                {
                    item.tags.map((tag, index) => (
                        <Tag key={ index } text={ tag } size="small" />
                    ))
                }
            </div>

            <div className="space-y-2 md:space-y-3 transition-all group-hover:opacity-80 group-active:opacity-60">
                <RollingText>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl">
                        { item.title }
                    </h3>
                </RollingText>

                <p>
                    { item.descriptionShort }
                </p>
            </div>
        </Link>
    )
}

export default SingleProject