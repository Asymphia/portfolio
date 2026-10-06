import Label from "@/components/ui/label";

interface InputProps {
    type: "text" | "email" | "url"
    label: string
    placeholder: string
    name: string
    required?: boolean
    className?: string
}

const Input = ({ type, label, placeholder, name, required=true, className }: InputProps) => {
    return (
        <label className={ className }>
            <Label label={ label } multichoice={ false } required={ required } />

            <input
                type={ type }
                placeholder={ placeholder }
                name={ name }
                required={ required }
                className="border border-grey-500 text-grey-500 placeholder:text-grey-500 focus:outline-none rounded-xs px-4 py-3 w-full
                    transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 hover:border-grey-700/75 focus:border-grey-700 focus:text-grey-700"
            />
        </label>
    )
}

export default Input