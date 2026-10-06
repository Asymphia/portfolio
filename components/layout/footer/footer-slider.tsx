import Marquee from "@/components/ui/marquee"
import Link from "next/link"
import RollingText from "@/components/ui/rolling-text"

const FooterSlider = () => {
    return (
        <Marquee gap="1.5rem">
            {
                [0, 1, 2, 3, 4, 5].map(element => (
                    <div className="text-white flex shrink-0 items-center gap-4" key={ element }>
                        <Link href="#contact">
                            <RollingText>
                                <h3 className="text-white transition-all hover:opacity-80 active:opacity-60 text-5xl">
                                    Let’s talk
                                </h3>
                            </RollingText>
                        </Link>

                        <p>
                            <span className="block">
                                Lorem ipsum dotor sit amet?
                            </span>

                            <span className="block">
                                Consectetur adipiscing elit
                            </span>
                        </p>
                    </div>
                ))
            }
        </Marquee>
    )
}

export default FooterSlider