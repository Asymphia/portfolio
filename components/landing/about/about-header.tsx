import AccentText from "@/components/ui/accent-text"
import starImage from "@/assets/star.svg"
import Image from "next/image"

const AboutHeader = () => {
    return (
        <header className="space-y-5 relative">
            <AccentText>
                About me
            </AccentText>

            <h2 className="text-5xl/14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, mauris et pharetra porta,
                ligula purus laoreet massa, sed tincidunt lectus nisl vel orci. {" "}

                <span className="text-grey-500">
                    Nam dapibus urna accumsan, facilisis libero nec, malesuada elit. Aenean sodales tortor et
                    scelerisque sagittis. Nunc pellentesque dapibus est. Praesent hendrerit risus sed semper varius.
                </span>
            </h2>

            <Image src={ starImage } alt="An icon of a blue star" className="absolute -top-6 -right-6" />
        </header>
    )
}

export default AboutHeader