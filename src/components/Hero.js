import React from 'react'
import heroImage from '../Assets/hero.img.jfif'

const Hero = () => {
  return (
    <div
      className='bg-pink-100 w-[100%] h-[300px] flex flex-col justify-center items-start'
      style={{
        backgroundImage: `url("${heroImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
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