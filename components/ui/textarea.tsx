import Label from "@/components/ui/label"
import { useId } from "react"
import FieldError from "@/components/landing/contact/field-error"

interface TextareaProps {
    name: string
    placeholder: string
    label: string
    required?: boolean
    className?: string
    defaultValue?: string
    error?: string
}

const Textarea = ({ name, placeholder, label, required=false, className, defaultValue, error }: TextareaProps) => {
    const errorId = useId()

    return (
        <div className={`w-full ${ className }`}>
            <label className="block">
                <Label label={ label } multichoice={ false } required={ required } />

                <textarea
                    name={ name }
                    placeholder={ placeholder }
                    required={ required }
                    defaultValue={ defaultValue }
                    aria-invalid={ error ? true : undefined }
                    className="border border-grey-500 text-grey-700 placeholder:text-grey-500 rounded-xs px-4 py-3 w-full resize-none focus:outline-none
                        transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 hover:border-grey-700/75 focus:border-grey-700 focus:text-grey-700
                        aria-invalid:border-error! aria-invalid:text-error!"
                    rows={ 5 }
                />
            </label>

            <FieldError id={ errorId } message={ error } />
        </div>
    )
}

export default Textarea