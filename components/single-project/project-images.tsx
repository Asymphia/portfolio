import { ProjectImage } from "@/lib/projects"
import Image from "next/image"

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    return (
        <div className="space-y-5">
            {
                images.map(image => (
                    <Image src={ image.image } alt={ image.alt } className="w-full rounded-sm" />
                ))
            }
        </div>
    )
}

export default ProjectImages