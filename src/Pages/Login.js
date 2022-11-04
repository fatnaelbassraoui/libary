import React from 'react'
import FormModalLogin from '../components/FormLogin'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgLogin from '../Assets/sign-page.webp'




const Login = () => {
    return (
        <div>

            <Navbar />
            <div
                className='container flex  w-screen'
            >
                <div
                    className=" w-[100%] ">
                    <div
                    className='h-[900px]'
                         style={{
                            backgroundImage:`url("${imgLogin}")`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center'
                        }}
                    >
                        
                    </div>

                </div>
                <div className=" w-[100%] h-[900px] flex justify-center items-center flex-wrap g-6 text-gray-800 ">
                    <div 
                    className='w-[50%] flex justify-center'
                    >
                    <FormModalLogin />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login