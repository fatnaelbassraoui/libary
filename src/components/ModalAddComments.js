import React from 'react'
import { useState } from 'react'


const ModalAddComments = ({ book }) => {
  const [formValue, setFormValue] = useState(null)
  const postComment = async (e) => {
    e.preventDefault()
    const url = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`
    try {

      await fetch(
        url,
        {
          method: 'POST',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJmNzJmNjQwYWU2YTAwMTU0ZmJiNDEiLCJpYXQiOjE2NjcwNTY2MDcsImV4cCI6MTY2ODI2NjIwN30.i_7NBaKH0OKFB8EB_GWoXQ9jUpJ9axJKhjOba5RvMRY",
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            author: 'Faty',
            comment: formValue.comment,
            rate: formValue.rate,
            createdAt: new Date(),
            updatedAt: new Date(),
            elementId: book.asin

          })

        })


    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className='flex flex-col justify-center items-center mx-auto text-center'>
      <h1 className='font-bold text-xl'>Lascia un commento</h1>
      <h2 className='text-sm mt-2 mb-4'>per: {book.title}</h2>
      <form 
      className='flex flex-col justify-center items-center mt-4'
      onSubmit={postComment}>
        <div className='flex flex-col mx-auto'>
        <input
          className='mb-2 p-2 rounded'
          type="text"
          placeholder='Insert your comment'
          onChange={(e) =>
            setFormValue({ ...formValue, comment: e.target.value })
          }
        />
        <select
          className='mb-2 p-2 rounded w-full'
          onChange={(e) =>
            setFormValue({ ...formValue, rate: e.target.value })

          }>
          <option value="" disabled>
            Rate this book
          </option>
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
        </select>
        </div>
        <div>
        <button
          className='rounded p-2 bg-[#b2d2cd] hover:bg-[#95b2ad] text-sm uppercase text-white w-full mt-4'
          type='submit'
          onChange={(e) =>
            setFormValue({ ...formValue, add: e.target.value })
          }
        >
          Add comment
        </button>
        </div>
      </form>
    </div>
  )
}

export default ModalAddComments