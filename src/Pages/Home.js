import React from 'react'
import Navbar from '../components/Navbar'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import bgHome from '../Assets/bg-home..jfif'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <div className='mt-4'>
          <BookList />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Home