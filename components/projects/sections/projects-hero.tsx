import Image from "next/image"
import tqmSoft from "@/assets/projects/tqm-soft.png"

const ProjectsHero = () => {
    return (
        <h1 className="text-display-md flex items-center justify-center pt-50">
            <span>Ideas</span>

            <span className="mx-4 flex justify-center overflow-hidden rounded-sm">
                    <Image
                        src={ tqmSoft }
                        alt="Screenshot of a TQM Soft's website"
                        priority
                        className="max-w-56 shrink-0"
                    />
                </span>

            <span>made real</span>
        </h1>
    )
}

export default ProjectsHero