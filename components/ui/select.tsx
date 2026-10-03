import Tag from "@/components/ui/tag"
import Label from "@/components/ui/label";

interface SelectProps {
    label: string
    options: string[]
    name: string
    multichoice?: boolean
    required?: boolean
    className?: string
}

const Select = ({ label, options, name, multichoice=true, required=true, className }: SelectProps) => {
    return (
        <label className={`w-full ${ className }`}>
            <Label label={ label } multichoice={ multichoice } required={ required } />

            <div className="flex flex-wrap gap-3">
                {
                    options.map(option => (
                        <Tag text={ option } key={ option } className="text-grey-500" />
                    ))
                }
            </div>
        </label>
    )
}

export default Select