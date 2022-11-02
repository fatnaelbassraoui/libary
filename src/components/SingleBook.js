import React, { useState } from 'react'
import ModalCommentArea from './ModalCommentArea'
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const SingleBook = ({ book }) => {
  const [modalCommentArea, setModalCommentArea] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)
  const toggleCard = () => {
    setSelectedCard(!selectedCard);
  };
  return (
    <div 
    style={{
      backgroundImage:`url("${book.img}")`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center'

    }}
    className='flex flex-col justify-center w-[200px] h-[300px]  border rounded-xl relative shadow-md cursor-pointer'>
      <div
        onClick={() => toggleCard()}
        className={selectedCard ? ' drop-shadow-2xl hue-rotate-15' : 'border-stone-200'}>
        {/* <img src={book.img} alt="copertina" className='w-[200px] h-[200px]' /> */}
      </div>
      <div className='absolute bottom-2 bg-purple-900/[.7] text-white  text-xs rounded-lg mx-2 '>
        <h3 className='font-bold'>
          {book.title}
        </h3>
      </div>
      <div className='flex justify-center'>
        <button
        className=' text-xs m-auto mt-2 mb-2 absolute top-1 right-1 p-2 rounded-[50%] bg-purple-800 text-white'
          onClick={() => setModalCommentArea(true)}
        >
          <InsertCommentIcon/>
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