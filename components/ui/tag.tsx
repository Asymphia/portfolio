const Tag = ({ text, size="big", className }: { text: string, size?: "small" | "big", className?: string }) => {
    return (
        <div className={`border border-grey-500 rounded-xs w-fit ${ size === "small" ? "text-xs px-3 py-1 md:text-sm md:px-3.5 md:py-1.5" : "text-sm px-4 py-1.5 md:text-base md:px-5 md:py-2" } ${ className }`}>
            { text }
        </div>
    )
}

export default Tag