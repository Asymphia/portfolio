import AccentText from "@/components/ui/accent-text"
import Button from "@/components/ui/button"

interface StyledHeaderProps {
    header: string
    tag: string
    addButton?: boolean
    buttonText?: string
}

const StyledHeader = ({ header, tag, addButton=false, buttonText }: StyledHeaderProps) => {
    return (
        <div className="flex justify-between items-end">
            <header className="flex items-start gap-15">
                <AccentText className="mt-2.5">
                    { tag }
                </AccentText>

                <h2 className="text-6xl/17 max-w-175">
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
        </div>
    )
}

export default StyledHeader