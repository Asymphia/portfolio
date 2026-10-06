import { ComponentProps, ComponentType, ReactNode } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
    children: ReactNode
    style?: "primary" | "secondary"
    isSmaller?: boolean
    className?: string
    icon?: ComponentType<ComponentProps<'svg'>>
    iconBeforeText?: boolean
}

const Button = ({ children, style="primary", isSmaller=false, className, icon: Icon=ArrowRightIcon, iconBeforeText=false }: ButtonProps) => {
    return (
        <button
            className={`border border-black rounded-sm flex items-center cursor-pointer w-fit 
            ${ style === "primary" ? "bg-black text-white" : "bg-background text-black" }
            ${ isSmaller ? "px-4 py-2 gap-2 text-sm" : "px-6 py-3 gap-3 text-base" }
            ${ className } `}
        >
            {
                iconBeforeText && (
                    <Icon className={`stroke-2 ${ isSmaller ? "size-3" : "size-4" }`} />
                )
            }

            { children }

            {
                !iconBeforeText && (
                    <Icon className={`stroke-2 ${ isSmaller ? "size-3" : "size-4" }`} />
                )
            }
        </button>
    )
}

export default Button