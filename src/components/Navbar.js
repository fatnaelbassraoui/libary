import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarLink } from '../Constants/NavbarLink'
import SearchIcon from '@mui/icons-material/Search';
import fantasy from '../BooksData/fantasy.json'
import Logo from '../Assets/Logo-books..jpg'
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
        <nav>
            <div className='flex  bg-white justify-between pt-2'>
            <div className="mr-2 flex ">
                        <img src={Logo} width={100} alt="img" />
                                       
                    <h3
                        className=' text-black italic font-bold pt-4 '>
                        Faty Book Store
                    </h3>
                    </div>
                   
               
                <div className='flex flex-row justify-between content-center w-[400px] pt-4 '>
                    {NavbarLink.map((page, index) => {
                        return (
                            <ul>
                                <Link
                                    key={index}
                                    to={page.link}>
                                    <li
                                        className=' text-black italic font-bold'>
                                        {page.title}
                                    </li>
                                </Link>
                            </ul>

                        )
                    })}
                </div>

                <div>
                    <input
                        className='p-4 ml-2 text-slate-500 pt-4'
                        type='text'
                        placeholder='Search your book'
                        onChange={(e) => setSerchTest(e.target.value)}
                    ></input>
                    <button 
                    className='rounded bg-purple-400 mr-2'
                    onClick={() => [
                        filterBooks(fantasy, serchTest),
                        setModalSearchTest(true)
                    ]}><SearchIcon /></button>
                </div>

            </div>
            {result.length > 0 && modalSearchTest && (
                <div className='absolute top-12 right-6 w-[350px] bg-purple-50 z-10 flex flex-col justify-center rounded '>
                    <div className='flex justify-end text-xl cursor-pointer' onClick={() => setModalSearchTest(false)}>
                        &times;
                    </div>
                    <ul>
                        {result && result?.map((book) => {
                            return (
                                <div>
                                    <li
                                        key={book.asin}>
                                        {book.title}
                                    </li>
                                    <span 
                                    className='bg-purple-500 rounded-lg pr-1 pl-1 text-white text-md'>
                                        {book.asin}
                                    </span>
                                </div>
                            )

                        })}
                    </ul>
                </div>)}
        </nav>
    )
}

export default Navbar