import React, { useState, useEffect } from 'react'
import { Heart, Users, Clock, AlertCircle, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [urgencyPulse, setUrgencyPulse] = useState(false)
  const [donationCount, setDonationCount] = useState(10)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyPulse(true)
      setTimeout(() => setUrgencyPulse(false), 1500)
    }, 4000)

    const donationInterval = setInterval(() => {
      setDonationCount(prev => prev + Math.floor(Math.random() * 3))
    }, 800000)

    return () => {
      clearInterval(interval)
      clearInterval(donationInterval)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-b border-slate-700/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Title Section */}
            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              <div className="relative">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="currentColor" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full animate-ping"></div>
              </div>
              
              <div className="text-left min-w-0">
                <h1 className="text-base lg:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent truncate">
                  Help Hadel & Her Family
                </h1>
                <div className="hidden sm:flex items-center space-x-2 lg:space-x-3 text-xs lg:text-sm text-slate-300">
                  <div className="flex items-center space-x-1">
                    <Users size={12} className="text-blue-400 lg:w-4 lg:h-4" />
                    <span>{donationCount.toLocaleString()} supporters</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                 
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#about" className="group relative px-4 py-2 rounded-lg text-slate-200 hover:text-white transition-all duration-300 hover:bg-white/10">
                <span className="relative z-10">Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              
              
              <a href="#footer" className="group relative px-4 py-2 rounded-lg text-slate-200 hover:text-white transition-all duration-300 hover:bg-white/10">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Desktop Donate Button and Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Desktop Donation Stats */}
              <div className="hidden lg:block text-right text-sm">
                <div className="text-slate-300">Every dollar counts</div>
                <div className="text-green-400 font-semibold">$200 raised</div>
              </div>
              
              {/* Donate Button */}
              <a 
                href="https://flutterwave.com/donate/g4uabza00wyx"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:from-rose-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 lg:py-3 lg:px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-rose-500/25 ${urgencyPulse ? 'animate-pulse ring-4 ring-rose-400/50' : ''}`}
              >
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" />
                  <span className="text-sm lg:text-lg">Donate</span>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400/50 to-pink-400/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden text-slate-300 hover:text-white p-2 relative z-50"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="pb-3 lg:pb-4">
            <div className="bg-slate-700/50 rounded-full h-1.5 lg:h-2 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-full rounded-full shadow-lg relative" style={{width: '5%'}}>
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                <div className="absolute right-0 top-0 bottom-0 w-2 lg:w-4 bg-gradient-to-l from-white/50 to-transparent"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>5% funded</span>
              <span className="text-slate-300">Goal: $10,000</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={toggleMobileMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 pt-20">
              {/* Mobile Stats */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <div className="flex items-center space-x-1">
                    <Users size={14} className="text-blue-400" />
                    <span>{donationCount.toLocaleString()} supporters</span>
                  </div>
                  
                </div>
                <div className="text-center">
                  <div className="text-slate-300 text-sm">Every dollar counts</div>
                  <div className="text-green-400 font-semibold">$200 raised</div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-3">
                <a 
                  href="#about" 
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Our Story
                </a>
                <a 
                  href="#updates" 
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Updates
                </a>
                <a 
                  href="#contact" 
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Donate Button */}
              <div className="mt-8">
                <a 
                  href="https://flutterwave.com/donate/g4uabza00wyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:from-rose-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-full text-center shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={toggleMobileMenu}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span>Donate Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar