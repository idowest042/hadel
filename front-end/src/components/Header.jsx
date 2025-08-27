import React from 'react'
import hadel from '../assets/hadel.jpg'
const Header = () => {
  return (
    <div>
        <header className=''>
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-center text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-slate-300">
              Your support can change lives. Together, we can help Hadel and her family overcome their challenges and build a brighter future.
            </p>
            <a
              href="https://flutterwave.com/donate/g4uabza00wyx"
              className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Donate Now
            </a>
          </div>
          </div>
        </header>
    </div>
  )
}

export default Header