const Tag = ({ text }: { text: string }) => {
    return (
        <div className="border border-grey-500 rounded-xs px-5 py-2 w-fit">
            { text }
        </div>
    )
}

export default Tag