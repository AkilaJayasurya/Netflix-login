import React from 'react'
import backgroundImage from '../assets/images/background.jpg'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Success = () => {
  return (
   
<div className="h-screen bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="absolute top-6 left-32 z-10"><img src={logo} alt="Netflix Logo" className="w-40 h-auto" /></div>
    <div className="bg-white/80 p-8 rounded-2xl max-w-md w-full text-center animate-fade-in ">     
        <div className="text-5xl mb-4 animate-sad-bounce">🎬</div>
        <h1 className="text-4xl font-bold text-black mb-2">Welcome!</h1>
        <p className="text-gray-700 mb-6 text-2xl">You’re all set! Let the binge begin.</p>
        <Link to="/" className="inline-block bg-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded transition">
          Logout
        </Link>
      </div>
</div>

  )
}

export default Success


