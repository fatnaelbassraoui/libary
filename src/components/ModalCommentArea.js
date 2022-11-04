import React from 'react'
import ModalCommentList from './ModalCommentList'
import ModalAddComments from './ModalAddComments'

const ModalCommentArea = ({book,closeModal}) => {
       return (
        <div className="z-20 w-screen h-screen fixed top-1/2 left-1/2 flex item-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg rounded-xl">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white min-w-[350px] p-2 rounded-xl h-fit bg-zinc-100">
                <div className="flex flex-col relative justify-center items-center w-[350px] h-fit p-6">
                    <button className="absolute right-2 top-2 cursor-pointer " 
                    onClick={()=>closeModal(false)}
                    >
                        X
                    </button>
                    <ModalAddComments book={book}/>
                    <ModalCommentList book={book} />
                </div>
            </div>
        </div>
    )
}

export default ModalCommentArea