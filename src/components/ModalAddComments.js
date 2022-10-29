import React from 'react'
import { useState } from 'react'

const ModalAddComments = () => {
  const [formValue, setFormValue] = useState(null)
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
    <form action="">
      <input
      className='mb-2 p-2 w-fit'
        type="text"
        placeholder='Insert your comment'
        onChange={(e) =>
          setFormValue({ ...formValue, comment: e.target.value })
        }
      />
      <select 
      className='mb-2 p-2 w-fit'
      onChange={(e)=>
        setFormValue({...formValue, rate: e.target.value})
      
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
    </form>
    </div>
  )
}

export default ModalAddComments