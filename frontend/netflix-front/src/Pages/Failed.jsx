import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Failed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="absolute top-14 left-32 z-10"><img src={logo} alt="Netflix Logo" className="w-40 h-auto" /></div>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        <div className="text-5xl mb-4 animate-sad-bounce">⚡️</div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">Login Failed!</h1>
        <p className="text-gray-700 mb-6">Oops! Your mobile number or password is incorrect.</p>
        <Link to="/" className="inline-block bg-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded transition">
          Try Again
        </Link>
      </div>
    </div>
  )
}

export default Failed