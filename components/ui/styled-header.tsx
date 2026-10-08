import AccentText from "@/components/ui/accent-text"
import Button from "@/components/ui/button"

interface StyledHeaderProps {
    header: string
    tag: string
    addButton?: boolean
    buttonText?: string
    addText?: boolean
}

const StyledHeader = ({ header, tag, addButton=false, buttonText, addText=false }: StyledHeaderProps) => {
    return (
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <header className="flex flex-col items-start gap-3 md:flex-row md:gap-8 lg:gap-15">
                <AccentText className="md:mt-2.5">
                    { tag }
                </AccentText>

                <h2 className="max-w-200 text-4xl/11 md:text-5xl/13 lg:text-6xl/17">
                    { header }
                </h2>
            </header>

            {
                addButton && (
                    <Button>
                        { buttonText }
                    </Button>
                )
            }

            {
                addText && (
                    <p className="text-2xl text-black font-albert-sans font-medium">
                        2024 - 2026
                    </p>
                )
            }
        </div>
    )
}

export default StyledHeader