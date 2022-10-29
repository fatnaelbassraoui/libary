import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import fantasy from '../BooksData/fantasy.json'
import SingleBook from './SingleBook';
const Navbar = () => {
    const [serchTest, setSerchTest] = useState('')
    const [result, setResult] = useState([])
    const [modalSearchTest, setModalSearchTest] = useState(false)
    console.log(result);


    const filterBooks = (array, title) => {
        setResult([]);
        return array.filter((book) => {
            if (title === '') {
                return;
            } else if (
                book.title.toLowerCase().includes(title.toLowerCase())
            )
                setResult((prev) => [...prev, book])// è il metodo per pushare in un arrav. si pseadOperatore per prendere
        })

    }


    return (
        <div className='relative  w-screen'>
            <div className='flex flex-row bg-pink-100 justify-between p-2'>

                <h1>Home</h1>
                <h1>About</h1>
                <h1>Brouse</h1>


                <div>
                    <input
                        type='text'
                        onChange={(e) => setSerchTest(e.target.value)}
                    ></input>
                    <button onClick={() => [
                        filterBooks(fantasy, serchTest),
                        setModalSearchTest(true)
                    ]}><SearchIcon /></button>
                </div>

            </div>
                { result.length > 0 && modalSearchTest &&(
                <div className='absolute top-12 right-6 w-[350px] bg-zinc-100 z-10 flex flex-col justify-center  p-4'>
                    <div className='flex justify-end text-xl cursor-pointer' onClick={()=>setModalSearchTest(false)}>
                        &times;
                    </div>
                    <ul>
                        {result && result?.map((book, index) => {
                            return (

                                <li key={book.asin}>{book.title}</li>

                            )

                        })}
                    </ul>
                </div>)}
        </div>
    )
}

export default Navbar