'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-beam-green via-green-600 to-beam-blue text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powering the Future with
              <span className="block text-beam-yellow">Clean Energy</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Join BEAM Energy in revolutionizing how we power our communities. 
              From renewable projects to EV charging networks, we're building a sustainable tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary bg-white text-beam-green hover:bg-gray-100">
                Explore Projects
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-beam-green">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-beam-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Renewable Energy</h3>
              <p className="opacity-80">Solar, wind, and hydroelectric solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-beam-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Grids</h3>
              <p className="opacity-80">Intelligent energy distribution networks</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-beam-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="opacity-80">Building a greener future together</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
