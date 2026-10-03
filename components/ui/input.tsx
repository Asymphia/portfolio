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
        <label>
            <Label label={ label } multichoice={ false } required={ required } />

            <input
                type={ type }
                placeholder={ placeholder }
                name={ name }
                required={ required }
                className="border border-grey-500 text-grey-500 placeholder:text-grey-500 rounded-xs px-4 py-3 w-full"
            />
        </label>
    )
}

export default Input