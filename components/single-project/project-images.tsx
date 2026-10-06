import { ProjectImage } from "@/lib/projects"
import Image from "next/image"
import ProjectsReveal from "@/components/projects/projects-reveal"

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    return (
        <ProjectsReveal className="space-y-8">
            {
                images.map(image => (
                    <Image data-project src={ image.image } alt={ image.alt } key={ image.alt } className="w-full rounded-md drop-shadow-xs border border-grey-300" />
                ))
            }
        </ProjectsReveal >
    )
}

export default ProjectImages