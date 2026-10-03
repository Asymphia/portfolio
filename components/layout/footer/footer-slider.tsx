const FooterSlider = () => {
    return (
        <div className="flex flex-nowrap gap-6 overflow-x-clip">
            {
                [0, 1, 2, 3, 4, 5].map(element => (
                    <div className="text-white flex items-center gap-4 shrink-0" key={ element }>
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
        </div>
    )
}

export default FooterSlider