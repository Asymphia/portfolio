import aboutImg from "@/assets/about-image.jpg"
import Image from "next/image"
import Tag from "@/components/ui/tag"

const AboutTags = () => {
    const tags = [
        "WordPress Websites",
        "E-commerce Websites",
        "Custom WordPress Themes",
        "Custom WordPress Plugins",
        "Front-End Development",
        "UI/UX Design",
        "SEO & Copywriting"
    ]

    return (
        <div className="flex gap-6 md:gap-12 items-center">
            <Image src={ aboutImg } alt="Screenshot of a TQM Soft's website" className="w-full hidden lg:block md:max-w-71" />

            <div className="space-y-4">
                <p className="text-black text-sm">
                    [ My fields of interest ]
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
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