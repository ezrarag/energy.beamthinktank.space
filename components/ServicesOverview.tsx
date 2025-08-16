'use client'

import { motion } from 'framer-motion'
import { Sun, Zap, Fuel, Heart, MapPin, Users } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Renewable Projects',
    description: 'Solar farms, wind turbines, and hydroelectric installations powering communities sustainably.',
    features: ['Solar Energy', 'Wind Power', 'Hydroelectric', 'Community Solar'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'EV Charging Network',
    description: 'Comprehensive electric vehicle charging infrastructure across major cities and highways.',
    features: ['Fast Charging', 'Smart Grid Integration', 'Mobile App', '24/7 Support'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Fuel,
    title: 'Fuel Stations',
    description: 'Modern fuel stations with renewable energy integration and sustainable practices.',
    features: ['Biofuels', 'Hydrogen', 'Electric Charging', 'Green Building'],
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Heart,
    title: 'Donations & Impact',
    description: 'Support renewable energy projects and track your environmental impact in real-time.',
    features: ['Project Funding', 'Impact Tracking', 'Tax Benefits', 'Community Projects'],
    color: 'from-red-500 to-red-600'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-beam-dark mb-4">
            Our Energy Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BEAM Energy provides comprehensive sustainable energy solutions, from renewable power generation 
            to electric vehicle infrastructure and community impact programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-beam-dark mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-beam-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-beam-green font-semibold hover:text-green-600 transition-colors duration-200">
                  Learn More →
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
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-beam-green to-beam-blue rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-beam-dark">Join the Energy Revolution</h3>
                <p className="text-gray-600">Be part of the sustainable energy future</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-beam-green mb-2">500+</div>
                <div className="text-gray-600">Renewable Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beam-blue mb-2">1,200+</div>
                <div className="text-gray-600">Charging Stations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beam-yellow mb-2">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
            
            <button className="btn-primary">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
