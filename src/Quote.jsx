import React, { useState, useEffect } from 'react';

import SaveQuoteBtn from "./SaveQuoteBtn"
import NextQuoteBtn from "./NextQuoteBtn"

function Quote({ quote, getNext, saveQuoteToList }) {

  return (
    <div className='rounded-md w-3/5 m-auto text-center pt-8 pb-2 px-4 mb-10 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'>
      <div>
        <p className='text-white'>{quote.q}</p>
        <strong className='text-white'>- {quote.a}</strong>
      </div>
      
      <SaveQuoteBtn handleClick={saveQuoteToList}/>
      <NextQuoteBtn handleClick={getNext}/>
    </div>
  );
}

export default Quote;