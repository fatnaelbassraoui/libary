import React from 'react'
import FormModalLogin from '../components/FormLogin'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
    return (
        <div>
            <Navbar/>
            <FormModalLogin />
            <Footer/>
        </div>
    )
}

export default Login