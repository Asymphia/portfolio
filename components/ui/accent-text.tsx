import { ReactNode } from "react"

const AccentText = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <p className={`text-primary uppercase font-albert-sans ${ className }`}>
            [ { children } ]
        </p>
    )
}

export default AccentText