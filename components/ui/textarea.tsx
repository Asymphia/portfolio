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
                className="border border-grey-500 text-grey-500 placeholder:text-grey-500 rounded-xs px-4 py-3 w-full resize-none focus:outline-none
                    transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 hover:border-grey-700/75 focus:border-grey-700 focus:text-grey-700"
                rows={ 5 }
            />
        </label>
    )
}

export default Textarea