import { ReactNode } from "react"

interface RollingTextProps {
    children: ReactNode
    className?: string
}

const ROLL = "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"

const RollingText = ({ children, className="" }: RollingTextProps) => {
    return (
        <span className={`group relative inline-block overflow-hidden whitespace-nowrap align-top ${ className }`}>
            <span className={`block ${ ROLL }`}>
                { children }
            </span>

            <span aria-hidden className={`absolute left-0 top-full block ${ ROLL }`}>
                { children }
            </span>
        </span>
    )
}

export default RollingText