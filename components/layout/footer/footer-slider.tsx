import Marquee from "@/components/ui/marquee"

const FooterSlider = () => {
    return (
        <Marquee gap="1.5rem">
            {
                [0, 1, 2, 3, 4, 5].map(element => (
                    <div className="text-white flex shrink-0 items-center gap-4" key={ element }>
                        <h3 className="text-white text-5xl">
                            Let’s talk
                        </h3>

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