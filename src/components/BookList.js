import React, { useState } from 'react'
import fantasy from '../BooksData/fantasy.json'
import SingleBook from './SingleBook';

const BookList = () => {
  
  return (
    <div className='container flex items-center '>
    <div
    className='flex flex-wrap justify-center gap-8 p-2  '>
        {fantasy.slice(0,24).map((book,index)=>{
            return(
               
                <SingleBook
                key={index}
                book={book}
                // selected={setSelectedCard}
                />
               
            )
        })}
    </div>
    </div>
    
  )
}

export default BookList