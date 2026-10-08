import { ComponentProps, ComponentType, ReactNode } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import RollingText from "@/components/ui/rolling-text"
import Link from "next/link"

interface ButtonProps {
    children: ReactNode
    style?: "primary" | "secondary"
    isSmaller?: boolean
    className?: string
    icon?: ComponentType<ComponentProps<'svg'>>
    iconBeforeText?: boolean
    href?: string
    disabled?: boolean
    target?: "_blank" | "_self"
    download?: boolean
    type?: "button" | "submit"
}

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]"

const Button = ({ children, style="primary", isSmaller=false, className="", icon: Icon=ArrowRightIcon, iconBeforeText=false, href, disabled=false, target, download=false, type="button" }: ButtonProps) => {
    const classes = [
        "group border border-black rounded-sm flex items-center justify-center cursor-pointer w-fit",
        `transition-[background-color,scale] duration-500 ${ EASE } active:scale-[0.97]`,
        style === "primary" ? "bg-black text-white hover:bg-black/80" : "bg-background text-black hover:bg-grey-300",
        isSmaller
            ? "px-3.5 py-2 gap-2 text-xs md:px-4 md:text-sm"
            : "min-h-11 px-5 py-2.5 gap-2.5 text-sm md:min-h-0 md:px-6 md:py-3 md:gap-3 md:text-base",
        disabled ? "pointer-events-none opacity-50" : "",
        className,
    ].filter(Boolean).join(" ")

    const icon = (
        <Icon
            className={`stroke-2 transition-transform duration-700 ${ EASE }
            ${ iconBeforeText ? "group-hover:-translate-x-1" : "group-hover:translate-x-1" }
            ${ isSmaller ? "size-2.5 md:size-3" : "size-3.5 md:size-4" }`}
        />
    )

    const content = (
        <>
            { iconBeforeText && icon }

            <RollingText>
                { children }
            </RollingText>

            { !iconBeforeText && icon }
        </>
    )

    if (href) {
        const isFile = download || href.endsWith(".pdf")

        return (
            <Link
                href={ href }
                target={ target }
                rel={ target === "_blank" ? "noopener noreferrer" : undefined }
                download={ download }
                prefetch={ isFile ? false : undefined }
                className={ classes }
            >
                { content }
            </Link>
        )
    }

    return (
        <button type={ type } className={ classes } disabled={ disabled }>
            { content }
        </button>
    )
}

export default Button