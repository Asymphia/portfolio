import tqmSoft from "@/assets/projects/tqm-soft.png"
import Image from "next/image"
import Tag from "@/components/ui/tag"

const AboutTags = () => {
    const tags = [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum"
    ]

    return (
        <div className="flex gap-12 items-center">
            <Image src={ tqmSoft } alt="Screenshot of a TQM Soft's website" className="max-w-71" />

            <div className="space-y-4">
                <p className="text-black text-sm">
                    [ Lorem ipsum ]
                </p>

                <div className="flex flex-wrap gap-3">
                    {
                        tags.map((tag, index) => (
                            <Tag key={ index } text={ tag } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutTags