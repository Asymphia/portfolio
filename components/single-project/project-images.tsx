import { ProjectImage } from "@/lib/projects"
import Image from "next/image"

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    return (
        <div className="space-y-8">
            {
                images.map(image => (
                    <Image src={ image.image } alt={ image.alt } key={ image.alt } className="w-full rounded-md drop-shadow-xs border border-grey-300" />
                ))
            }
        </div>
    )
}

export default ProjectImages