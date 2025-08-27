import React from 'react'
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Youtube
} from 'lucide-react'


const Footer = ({ color = "#000" }) => {
  return (
    <footer className="bg-slate-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo/Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold">Help Hadel & Family</h3>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Supporting Hadel and her three daughters through difficult times. Every donation helps bring hope and stability to their lives.
            </p>
            <div className="text-slate-400 text-sm">
              Campaign #HF2024 | Registered Charity
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="https://flutterwave.com/donate/g4uabza00wyx" className="text-slate-300 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
             
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hadelcampaign@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Gaza, Palestine</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://www.tiktok.com/@voice_of_palestine06?_t=ZS-8zEtaHNXoAC&_r=1" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-all">
               <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100%" height="100%">
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
              </a>
              <a href="https://www.youtube.com/@hadel_gaza" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-500 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-slate-400 text-sm mb-4 sm:mb-0">
            © 2025 Help Hadel Campaign. All rights reserved.
          </div>
          <div className="text-slate-400 text-sm">
            Made with ❤️ for Hadel's family
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer