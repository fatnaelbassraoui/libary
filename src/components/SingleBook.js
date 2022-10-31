import React, { useState } from 'react'
import ModalCommentArea from './ModalCommentArea'

const SingleBook = ({ book }) => {
  const [modalCommentArea, setModalCommentArea] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)
  const toggleCard = () => {
    setSelectedCard(!selectedCard);
  };
  return (
    <div className='flex flex-col justify-center w-[200px] border rounded shadow-md cursor-pointer'>
      <div
        onClick={() => toggleCard()}
        className={selectedCard ? ' drop-shadow-2xl hue-rotate-15' : 'border-stone-200'}>
        <img src={book.img} alt="copertina" className='w-[200px] h-[200px]' />
      </div>
      <div>
        <h3 className='font-bold'>
          {book.title}
        </h3>
      </div>
      <div className='flex justify-center'>
        <button
        className='bg-sky-500 hover:bg-sky-700 rounded-xl text-white text-xs m-auto mt-2 mb-2'
          onClick={() => setModalCommentArea(true)}
        >
          Comment this book
        </button>
      </div>
      {modalCommentArea && <ModalCommentArea
        book={book}
        closeModal={setModalCommentArea}
      />}
    </div>
  )
}

export default SingleBook