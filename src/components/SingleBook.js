import React, { useState } from 'react'
import ModalCommentArea from './ModalCommentArea'

const SingleBook = ({book}) => {
  const [modalCommentArea, setModalCommentArea]=useState(false)
  return (
    <div className='flex flex-col justify-center w-[200px] border rounded shadow-md cursor-pointer'
    onClick={()=>setModalCommentArea(true)}
    >
        <div>
            <img src={book.img}alt="copertina" className='w-[200px] h-[200px]' />
        </div>
        <div>
            <h3 className='font-bold'>
                {book.title}
            </h3>
        </div>
       {modalCommentArea &&  <ModalCommentArea book={book} closeModal={setModalCommentArea}/>}
    </div>
  )
}

export default SingleBook