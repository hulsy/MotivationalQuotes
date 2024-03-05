export default function NextQuoteBtn({ handleClick }) {
    return (
        <button
            className=" m-4 py-2 px-4 shadow-xl rounded-lg bg-blue-600 text-white
            hover:bg-blue-400 transition-all duration-200"
            onClick={handleClick}
        >
            Next
        </button>
    )
}