import tqmSoft from "@/assets/projects/tqm-soft.png"
import Image from "next/image"

const VisualSection = () => {
    return (
        <section className="overflow-x-clip">
            <Image src={ tqmSoft } alt="Screenshot of a TQM Soft's website" className="max-w-240 -mb-10 relative z-2 mx-auto rounded-sm" />

            <h2 className="text-display-md uppercase text-nowrap">
                More visual highlights
            </h2>
        </section>
    )
}

export default VisualSection