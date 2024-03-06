export default function QuoteListItem({ quoteList, handleClick }){
    return(
        <ul>
           {quoteList.map((q, idx) => (
                <div className="flex justify-center gap-2">
                    <li className=" bg-slate-500 w-2/3 my-2 shadow-lg rounded-md">
                        <p>{q.q}</p>
                        <strong>- {q.a}</strong>
                    </li>
                    <button 
                    className=" bg-red-600 p-2 rounded-md shadow-lg my-2 hover:bg-red-400 transition-all duration-150"
                    onClick={() => handleClick(idx)}
                    >
                        Delete
                    </button>
                </div>
            ))}   
        </ul>
    )          
}