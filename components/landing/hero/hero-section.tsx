import tqmSoft from "@/assets/projects/tqm-soft.png"
import Image from "next/image";
import Button from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className="container flex flex-col items-center pt-50">
            <h1 className="text-display-lg flex items-center gap-7 mb-8">
                <span>Julia</span>

                <Image src={ tqmSoft } alt="Screenshot of a TQM Soft's website" className="max-w-62 rounded-sm" />

                <span>Kawa</span>
            </h1>

            <p className="text-5xl/16 max-w-220 text-center mb-16">
                Designing and coding web interfaces from Poland [ Rzeszów ]
            </p>
            
            <div className="flex gap-6">
                <Button style="secondary">
                    Get in touch
                </Button>

                <Button style="primary">
                    Discover more
                </Button>
            </div>
        </section>
    )
}

export default HeroSection