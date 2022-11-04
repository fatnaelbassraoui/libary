import React from 'react'
import heroImage from '../Assets/herobg.png'

const Hero = () => {
  return (
    <div
      className='bg-pink-100 w-[100%] h-[300px] flex flex-col justify-center items-start'
      style={{
        backgroundImage: `url("${heroImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10% bottom 0%'
      }}>
      <div>
        <h1
          className='text-5xl font-bold ml-20 text-white italic'>
            Choose your book from thousands of books
        </h1>
        <div />
        <div>
          <p
            className='text-xl font-bold pt-4 ml-20 text-white italic'
          >
            Access your favourite books anytime, anywhere
          </p>
        </div>
      </div>
      </div>
      )
}

      export default Hero