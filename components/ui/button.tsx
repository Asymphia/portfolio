import { ReactNode } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
    children: ReactNode
    style?: "primary" | "secondary"
    isSmaller?: boolean
    className?: string
}

const Button = ({ children, style="primary", isSmaller=false, className }: ButtonProps) => {
    return (
        <button
            className={`border border-black rounded-sm flex cursor-pointer w-fit 
            ${ style === "primary" ? "bg-black text-white" : "bg-background text-black" }
            ${ isSmaller ? "px-4 py-2 gap-2 text-sm" : "px-6 py-3 gap-3 text-base" }
            ${ className } `}
        >
            { children }

            <ArrowRightIcon className="w-4" />
        </button>
    )
}

export default Button