import React from 'react'
import FormModalLogin from '../components/FormLogin'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgLogin from '../Assets/Logo-books.jpg'



const Login = () => {
    return (
        <div>

            <Navbar />
            <section class="h-screen ml-28">
                <div class="container px-6 py-12 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <FormModalLogin/>
                        </div>
                        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src={imgLogin}
                                class="w-full"
                                alt="Phone image"
                            />
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Login