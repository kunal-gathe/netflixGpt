import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate, validateName } from '../utils/validate'

function Login() {
    let [isSignIn, setIsSighIn] = useState(true)
    let [errorMessage, setErrorMessage] = useState(null)
    let [nameError, setNameError] = useState(null)

    let email = useRef(null)
    let password = useRef(null)
    let name = useRef(null)

    const handleError =()=>{
        !isSignIn && setNameError(validateName(name.current.value))
        setErrorMessage(checkValidate(email.current.value, password.current.value))
    }
  return (
    <div>
      <Header />
      <div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bg-img' 
        className='brightness-50 absolute   '
        />
        <form onSubmit={(e)=> e.preventDefault()} className='z-10 absolute flex flex-col bg-black w-1/4 h-[73%] top-28 left-[37%] px-16 py-12 bg-opacity-60 rounded-lg'>
            <h1 className='text-white text-3xl font-bold my-6  '>{isSignIn ? "SignIn" : "SighUp"}</h1>
            {
              !isSignIn &&  <input ref={name} type='text'  placeholder='Name'
                className='p-3 mb-6 bg-slate-800 rounded-lg text-white'
                />
            }
            
            <input ref={email} type='email' placeholder='Email'
            className='p-3 mb-6 bg-slate-800 rounded-lg text-white'
            />
            <input ref={password} type='password' placeholder='Password' 
            className='p-3 mb-6 bg-slate-800 rounded-lg text-white'
            />
            <p className='text-red-600 font-medium mb-2'>{errorMessage}</p>
            {/* <p className='text-red-600 font-medium mb-2'>{nameError}</p> */}
            <button onClick={()=> handleError()} className='bg-red-600 text-xl font-bold text-white p-3 rounded-lg'>Submit</button>
            <p className='mt-4 text-white' onClick={()=>{
                setIsSighIn(!isSignIn)
            }}>{isSignIn ? "Account Registered! Sign Up": "New user? Sign up"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
