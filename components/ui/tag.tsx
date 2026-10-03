const Tag = ({ text, size="big", className }: { text: string, size?: "small" | "big", className?: string }) => {
    return (
        <div className={`border border-grey-500 rounded-xs w-fit ${ size === "small" ? "text-sm px-3.5 py-1.5" : "text-base px-5 py-2" } ${ className }`}>
            { text }
        </div>
    )
}

export default Tag