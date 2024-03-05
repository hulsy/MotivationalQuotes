import { useState, useEffect } from "react"
import Quote from "./Quote"
import axios from 'axios'


const initialList = [
    {
        q: "You miss 100% of the shots you don't take",
        a: "Wayne Gretzky"
    }
]

export default function QuoteList() {

    const [quoteList, setQuoteList] = useState(initialList)
    const [quote, setQuote] = useState([]);
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/quote');
          setQuote(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [isSaved]);
  
    const getNext = () => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/quote');
          setQuote(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }

    const saveQuoteToList = () => {
        setQuoteList((currQuoteList) => {
            return [...currQuoteList, quote]
        })
        setIsSaved(!isSaved)
    }

    return (
        <div>
            <Quote quote={quote} getNext={getNext} saveQuoteToList={saveQuoteToList}/>
            <h2 className=" text-3xl font-thin my-10">Saved Quotes</h2>
            <ul>
                {quoteList.map(q => (
                    <li>
                        <p>{q.q}</p>
                        <strong>- {q.a}</strong>
                    </li>
                ))}
            </ul>

        </div>
        
    )
}