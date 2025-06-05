import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import backgroundImage from '../assets/images/background.jpg'

const Login = () => {
    const [num, setnum] = useState('')
    const [pass, setpass] = useState('')
    const [error, seterror] = useState('')
    const [numerr, setnumerr] = useState('')
    const [passerr, setpasserr] = useState('')
    const navigate = useNavigate('')

    function handlenum(event) {
        setnum(event.target.value)
        setnumerr('')
    }

    function handlepass(event) {
        setpass(event.target.value)
        setpasserr('')
    }

    function check() {
       let checked = false

        if (!num || num.trim() === '') {
            setnumerr('Enter the mobile number')
            checked = true
        }
        else {
            setnumerr('')
        }

        if (!pass || pass.trim() === '') {
            setpasserr('Enter the password')
            checked = true
        }
        else {
            setpasserr('')
        }
        if (!checked) {
             axios.get(`http://localhost:3000/login?mobile=${num}&password=${pass}`,{ withCredentials: true })       
            

                .then( (data) => {
                    if (data.data === true) {
                        navigate('/success')
                    }
                    else {
                        navigate('/fail')
                    }
                })
                .catch((err) => {
                    console.error('Error occured :', err)
                    // seterror('Error occured , please try again')
                })
        }
    }


return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage:`url(${backgroundImage})`}}>
        <div className="absolute top-6 left-32 z-10"><img src={logo} alt="Netflix Logo" className="w-40 h-auto" /></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-black/90 w-full max-w-md p-12 rounded-md text-white">
                <h1 className="text-4xl font-bold mb-5">Sign In</h1>

                <div className="space-y-4">
                    <div>
                        <input
                            onChange={handlenum}
                            type="text"
                            name="mobile"
                            placeholder="Mobile number"
                            className="w-full p-2 bg-gray-500/40 text-white rounded-md border border-gray-500 focus:outline-none focus:border-white hover:border-white"
                            value={num} />
                        {numerr && (<p className="mt-1 text-sm text-red-500">{numerr}</p>)}
                    </div>

                    <div>
                        <input
                            onChange={handlepass}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 bg-gray-500/40 text-white rounded-md border border-gray-500 focus:outline-none focus:border-white hover:border-white"
                            value={pass} />
                        {passerr && (<p className="mt-1 text-sm text-red-500">{passerr}</p>)}
                    </div>

                    <button
                        onClick={check}
                        className="w-full p-2 bg-red-700 text-white font-semibold rounded-md hover:bg-red-500 transition">Sign In
                    </button>
                </div>

                <div className="text-center my-4">
                    <h3 className="text-gray-400 font-semibold">OR</h3>
                </div>

                <button className="w-full p-2 bg-gray-500/40 text-white rounded-md border border-gray-500 hover:border-white">
                    Use a sign-in code
                </button>

                <p className="mt-6 text-gray-400 hover:underline cursor-pointer">Forgot password?</p>

                <p className="mt-6 text-gray-400">
                    New to Netflix?{' '}
                    <a href="#" className="text-white hover:underline">Sign up now.</a>
                </p>

            </div>
        </div>
    </div>
)}

export default Login

