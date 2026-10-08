interface LabelProps {
    label: string
    required?: boolean
    multichoice?: boolean
}

const Label = ({ label, required=true, multichoice=false }: LabelProps) => {
    return (
        <p className="text-sm mb-1 lg:mb-2">
            { label } {" "}

            {
                required ? <span>*</span> : <span>[ optional ]</span>
            }

            {" "}

            {
                multichoice && <span>[ select all that apply ]</span>
            }
        </p>
    )
}

export default Label