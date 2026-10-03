import { ReactNode } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
    children: ReactNode
    style?: "primary" | "secondary"
    className?: string
}

const Button = ({ children, style="primary", className }: ButtonProps) => {
    return (
        <button
            className={`border border-black rounded-sm px-6 py-3 flex gap-3 cursor-pointer w-fit 
            ${ style === "primary" ? "bg-black text-white" : "bg-background text-black" }
            ${ className } `}
        >
            { children }

            <ArrowRightIcon className="w-4" />
        </button>
    )
}

export default Button