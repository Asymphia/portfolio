import FooterSlider from "@/components/layout/footer/footer-slider"
import FooterBottomLinks from "@/components/layout/footer/footer-bottom-links"
import FooterReveal from "@/components/layout/footer/footer-reveal"

const Footer = () => {
    return (
        <FooterReveal>
            <footer className="bg-black pt-6 pb-8 space-y-18 mb-0!">
                <FooterSlider />

                <h2 className="text-display-fit text-white text-center">
                    Julia Kawa
                </h2>

                <FooterBottomLinks />
            </footer>
        </FooterReveal>
    )
}

export default Footer