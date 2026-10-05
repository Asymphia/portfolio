import Image from "next/image"
import tqmSoft from "@/assets/projects/tqm-soft.png"

const ProjectsHero = () => {
    return (
        <h1 className="text-9xl flex items-center justify-center pt-50">
            <span>Ideas</span>

            <span className="mx-4 flex justify-center overflow-hidden rounded-sm">
                    <Image
                        src={ tqmSoft }
                        alt="Screenshot of a TQM Soft's website"
                        priority
                        className="max-w-42 shrink-0"
                    />
                </span>

            <span>made real</span>
        </h1>
    )
}

export default ProjectsHero