import Label from "@/components/ui/label"
import { useId } from "react"
import FieldError from "@/components/landing/contact/field-error"

interface SelectProps {
    label: string
    options: string[]
    name: string
    multichoice?: boolean
    required?: boolean
    className?: string
    defaultValue?: string[]
    error?: string
}

const Select = ({ label, options, name, multichoice=true, required=true, className, defaultValue=[], error }: SelectProps) => {
    const labelId = useId()
    const errorId = useId()

    return (
        <div className={`w-full ${ className }`}>
            <div id={ labelId }>
                <Label label={ label } multichoice={ multichoice } required={ required } />
            </div>

            <div className="flex flex-wrap gap-3">
                {
                    options.map(option => (
                        <label key={ option } className="cursor-pointer">
                            <input
                                type={ multichoice ? "checkbox" : "radio" }
                                name={ name }
                                value={ option }
                                defaultChecked={ defaultValue.includes(option) }
                                aria-invalid={ error ? true : undefined }
                                className="peer sr-only"
                            />

                            <span className="block rounded-xs border border-grey-500 px-4 py-2 text-grey-500 select-none
                                transition-[background-color,border-color,color] ease-[cubic-bezier(0.16,1,0.3,1)] duration-500
                                hover:border-grey-700/75 peer-checked:border-black peer-checked:bg-black peer-checked:text-white
                                peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-black
                                peer-aria-invalid:border-error! peer-aria-invalid:text-error!"
                            >
                                { option }
                            </span>
                        </label>
                    ))
                }
            </div>

            <FieldError id={ errorId } message={ error } />
        </div>
    )
}

export default Select