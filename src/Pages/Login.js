import React from 'react'
import FormModalLogin from '../components/FormLogin'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgLogin from '../Assets/Logo-books.jpg'



const Login = () => {
    return (
        <div>

            <Navbar />
            <div
            style={{
                backgroundImage:`url("${imgLogin}")`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
          
              }}
            className="h-screen ">
                <div className="container px-6 py-12 h-full">
                    <div class="flex justify-center items-center flex-wrap g-6 text-gray-800 h-[600px] mt-8">
                        <FormModalLogin/>
                        
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login