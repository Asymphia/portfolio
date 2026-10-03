import { ReactNode } from "react"

const AccentText = ({ children }: { children: ReactNode }) => {
    return (
        <p className="text-primary uppercase font-albert-sans">
            [ { children } ]
        </p>
    )
}

export default AccentText