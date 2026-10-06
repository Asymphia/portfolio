import { ComponentProps, ComponentType, ReactNode } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import RollingText from "@/components/ui/rolling-text"

interface ButtonProps {
    children: ReactNode
    style?: "primary" | "secondary"
    isSmaller?: boolean
    className?: string
    icon?: ComponentType<ComponentProps<'svg'>>
    iconBeforeText?: boolean
}

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]"

const Button = ({ children, style="primary", isSmaller=false, className, icon: Icon=ArrowRightIcon, iconBeforeText=false }: ButtonProps) => {
    const icon = (
        <Icon
            className={`stroke-2 transition-transform duration-700 ${ EASE }
            ${ iconBeforeText ? "group-hover:-translate-x-1" : "group-hover:translate-x-1" }
            ${ isSmaller ? "size-3" : "size-4" }`}
        />
    )

    return (
        <button
            className={`group border border-black rounded-sm flex items-center cursor-pointer w-fit
            transition-all duration-500 ${ EASE } active:scale-[0.97]
            ${ style === "primary" ? "bg-black text-white hover:bg-black/80" : "bg-background text-black hover:bg-grey-300" }
            ${ isSmaller ? "px-4 py-2 gap-2 text-sm" : "px-6 py-3 gap-3 text-base" }
            ${ className }`}
        >
            { iconBeforeText && icon }

            <RollingText>
                { children }
            </RollingText>

            { !iconBeforeText && icon }
        </button>
    )
}

export default Button