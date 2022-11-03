import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const FormModalLogin = () => {
    const [formValue, setFormValue] = useState({})

    const notify = () => toast('Login successfully');

   const saveUserToDb = async ()=>{
        try {
            await fetch('http://localhost:3030/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(formValue)
            })
            
        } catch (error) {
            console.log(error);
            
        }
   }
    return (
    <>
            <div className="container m-auto flex flex-col justify-center">
                <div className='mt-20 text-xl font-bold p-4  w-fit'>
                    <h1>
                        Please login to your account
                    </h1>
                </div>
                <div className='flex flex-col w-fit p-4 '>
                <input
                        className="p-2 rounded-lg mb-2"
                        type="text"
                        placeholder="userName"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                userName: e.target.value,
                            })
                        }
                    ></input>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="email"
                        placeholder="e-mail"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                email: e.target.value,
                            })
                        }
                    ></input>
                
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="password"
                        placeholder="password"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                password: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <button
                    className="transition w-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 p-2 ml-4 rounded-lg mb-2 bg-purple-100 "
                    onClick={() =>saveUserToDb() }
                >
                    Save
                </button>
            </div>
            </>
    )
}

export default FormModalLogin
