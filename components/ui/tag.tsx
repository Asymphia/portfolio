const Tag = ({ text, size="big" }: { text: string, size?: "small" | "big" }) => {
    return (
        <div className={`border border-grey-500 rounded-xs w-fit ${ size === "small" ? "text-sm px-3.5 py-1.5" : "text-base px-5 py-2" }`}>
            { text }
        </div>
    )
}

export default Tag