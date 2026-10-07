interface FieldErrorProps {
    id: string
    message?: string
}

const FieldError = ({ id, message }: FieldErrorProps) => {
    if (!message) {
        return null
    }

    return (
        <p id={ id } className="mt-1 text-sm text-error">
            { message }
        </p>
    )
}

export default FieldError