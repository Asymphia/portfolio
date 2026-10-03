import Label from "@/components/ui/label"

interface TextareaProps {
    name: string
    placeholder: string
    label: string
    required?: boolean
    className?: string
}

const Textarea = ({ name, placeholder, label, required=false, className }: TextareaProps) => {
    return (
        <label className={`w-full ${ className }`}>
            <Label label={ label } multichoice={ false } required={ required } />

            <textarea
                name={ name }
                placeholder={ placeholder }
                className="border border-grey-500 text-grey-500 placeholder:text-grey-500 rounded-xs px-4 py-3 w-full"
                rows={ 5 }
            />
        </label>
    )
}

export default Textarea