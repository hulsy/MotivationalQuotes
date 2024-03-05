import QuoteList from "./QuoteList"

export default function App() {

    return (
        <main className="text-center text-white font-sans">
            <h1 className=" mt-28 mb-24 text-7xl font-thin bg-gradient-to-r from-white via-slate-50 to-slate-300 inline-block text-transparent bg-clip-text">
                Motivational Quotes
            </h1>
            <QuoteList />
        </main>
    )
  }

