import Label from "@/components/ui/label"
import { useId } from "react"
import FieldError from "@/components/landing/contact/field-error"

interface InputProps {
    type: "text" | "email" | "url"
    label: string
    placeholder: string
    name: string
    required?: boolean
    className?: string
    defaultValue?: string
    error?: string
}

const Input = ({ type, label, placeholder, name, required=true, className, defaultValue, error }: InputProps) => {
    const errorId = useId()

    return (
        <div className={ className }>
            <label>
                <Label label={ label } multichoice={ false } required={ required } />

                <input
                    type={ type }
                    placeholder={ placeholder }
                    name={ name }
                    required={ required }
                    defaultValue={ defaultValue }
                    aria-invalid={ error ? true : undefined }
                    className="border border-grey-500 text-grey-700 placeholder:text-grey-500 focus:outline-none rounded-xs px-4 py-3 w-full
                        transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 hover:border-grey-700/75 focus:border-grey-700 focus:text-grey-700
                        aria-invalid:border-error! aria-invalid:text-error!"
                />
            </label>

            <FieldError id={ errorId } message={ error } />
        </div>
    )
}

export default Input