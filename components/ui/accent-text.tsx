import { ReactNode } from "react"

const AccentText = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <p className={`text-primary uppercase font-albert-sans font-medium ${ className }`}>
            [ { children } ]
        </p>
    )
}

export default AccentText