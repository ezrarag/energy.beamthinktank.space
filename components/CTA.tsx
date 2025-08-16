'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart, Zap, Users } from 'lucide-react'

const ctaOptions = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Support renewable energy projects and community initiatives',
    buttonText: 'Donate Now',
    buttonStyle: 'btn-primary',
    link: '#donate'
  },
  {
    icon: Zap,
    title: 'Join a Project',
    description: 'Participate in community solar or wind energy programs',
    buttonText: 'Get Involved',
    buttonStyle: 'btn-secondary',
    link: '#projects'
  },
  {
    icon: Users,
    title: 'Partner With Us',
    description: 'Business partnerships for sustainable energy solutions',
    buttonText: 'Contact Us',
    buttonStyle: 'btn-outline',
    link: '#contact'
  }
]

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-beam-green via-green-600 to-beam-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power the Future?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Whether you want to support renewable energy projects, join community initiatives, 
            or partner with us on sustainable solutions, there are many ways to get involved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {option.title}
                </h3>
                
                <p className="text-gray-200 mb-6 opacity-90">
                  {option.description}
                </p>
                
                <button className={`${option.buttonStyle} w-full group-hover:scale-105 transition-transform duration-200`}>
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-200 mb-6 opacity-90 max-w-2xl mx-auto">
              Get the latest updates on our projects, energy innovations, and community impact. 
              Join our newsletter and be part of the sustainable energy conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="btn-primary bg-white text-beam-green hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-300 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-300 mb-4">
              Questions about getting involved? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-outline border-white text-white hover:bg-white hover:text-beam-green">
                Schedule a Call
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-beam-green">
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
