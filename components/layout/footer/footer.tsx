import FooterSlider from "@/components/layout/footer/footer-slider"
import FooterBottomLinks from "@/components/layout/footer/footer-bottom-links"

const Footer = () => {
    return (
        <section className="bg-black pt-6 pb-8 space-y-18">
            <FooterSlider />

            <h2 className="text-display-fit text-white text-center">
                Julia Kawa
            </h2>

            <FooterBottomLinks />
        </section>
    )
}

export default Footer