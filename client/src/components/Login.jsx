import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Login = () => {
  const {setShowUserLogin, setUser} = useAppContext()

  const [state, setState] = useState("login")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setUser({
      name: "Vikash Sharma",
      email:"vikash67@gmail.com"
    })
    setShowUserLogin(false)
  }
  return (
    <div onClick={ () => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white'>
        <p className='text-2xl font-medium m-auto'>
          <span className='text-primary'>User</span>{state === "login" ? " Login" : " Sign-Up"}
        </p>
        {state === "register" && <div className='w-full'>
          <p>Name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' required />
        </div>}

        <div className='w-full'>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}  placeholder='Enter E-mail' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' required/>
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' required />
        </div>
      {state === "register" ? (
        <p>Already have account ? <span onClick={() => setState("login")} className='text-primary cursor-pointer'>click here</span></p>):(
        <p>Create an account ? <span onClick={() => setState("register")} className='text-primarycursor-pointer'>click here</span></p>)}
        <button className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>{state === "register" ? "Create Account" : "Login"}</button>
      </form>
    </div>
  )
}

export default Login
