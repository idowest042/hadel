import React, { useState, useEffect } from 'react'
import { Heart, Users, MapPin, Calendar, Baby, Shield, Home, AlertTriangle, Star, Clock } from 'lucide-react'

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  
  useEffect(() => {
    
    const urgencyInterval = setInterval(() => {
      setUrgencyTimer(prev => ({
        ...prev,
        minutes: prev.minutes > 0 ? prev.minutes - 1 : 59,
        hours: prev.minutes === 0 && prev.hours > 0 ? prev.hours - 1 : prev.hours
      }))
    }, 60000)

   
  }, [])

  return (
    <div id="about" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span>A Mother's Desperate Plea</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Meet Hadel
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            A Courageous Mother Fighting for Her Children's Future in Gaza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden relative">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
                  </div>
                )}
                <iframe 
                  src="https://www.youtube.com/embed/CxOjjX_7Muk" 
                  title="Hadel and her daughters - A story of hope and survival" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                  onLoad={() => setIsVideoLoaded(true)}
                ></iframe>
              </div>
              
              {/* Video Overlay Info */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-slate-200">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-slate-700">Watch Hadel's and her daughter's</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">3 daughters • Gaza • 2025</div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-200">
              <div className="flex items-center space-x-2">
                <Baby className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="text-sm font-bold text-slate-800">4 Children</div>
                  <div className="text-xs text-slate-500">Ages 3, 5, 10</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            
            {/* Location Badge */}
            <div className="flex items-center space-x-2 text-slate-600">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Gaza Strip, Palestine</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Story */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800 leading-tight">
                "I Just Want My Daughters to Have Hope Again"
              </h2>
              
              <div className="prose prose-lg text-slate-700 space-y-4">
                <p className="text-xl leading-relaxed">
                  My name is <strong className="text-blue-600">Hadel</strong>, and I am a 35-year-old mother desperately fighting for my three precious daughters' and son survival in Gaza.
                </p>
                
                <p className="leading-relaxed">
                  Every night, I hold my children close as they ask me, <em>"Mama, will we be safe tomorrow?"</em> My heart breaks because I don't know how to answer them anymore.
                </p>
                
                <p className="leading-relaxed">
                  Despite the unimaginable hardships we face daily - the fear, the uncertainty, the lack of basic necessities - I refuse to give up. <strong className="text-purple-600">My daughters are my strength</strong>, and their innocent smiles remind me why I must keep fighting.
                </p>
                
                <p className="leading-relaxed">
                  I dream of a day when my girls can play freely, go to school without fear, and sleep peacefully through the night. <strong className="text-green-600">With your help, we can make this dream a reality.</strong>
                </p>
                
                <p className="text-lg font-semibold text-slate-800 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  Every donation, no matter how small, brings us one step closer to safety and a brighter future for my children.
                </p>
              </div>
            </div>

            {/* Family Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Family</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">5 Members</div>
                <div className="text-sm text-blue-600">Mother + 3 daughters + 1 son</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Goal</span>
                </div>
                <div className="text-2xl font-bold text-purple-700">Safety</div>
                <div className="text-sm text-purple-600">& Better Future</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl p-12 text-white shadow-2xl">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" fill="currentColor" />
          <h3 className="text-4xl font-bold mb-4">Be the Hope Hadel's Family Needs</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your generosity today could be the difference between despair and hope, between fear and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-pink-600 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6" fill="currentColor" />
                <a href="https://flutterwave.com/donate/g4uabza00wyx">
                 <span>Donate Now</span>
                </a>
              </div>
            </button>
            
            <div className="text-white/80">
              <div className="text-lg font-semibold">Every dollar counts ❤️</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About