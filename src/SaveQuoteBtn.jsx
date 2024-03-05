export default function SaveQuoteBtn({ handleClick }) {
    return (
        <button
            className=" m-4 py-2 px-4 shadow-xl rounded-lg bg-green-500 text-white
            hover:bg-green-300 transition-all duration-200" 
            onClick={handleClick}
        >  
            Save
        </button>
    )
}