'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Leaf } from 'lucide-react'

const stats = [
  {
    icon: Zap,
    value: '2.5 GW',
    label: 'Renewable Energy Generated',
    description: 'Clean power for over 500,000 homes',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Customers Served',
    description: 'Growing community of energy-conscious users',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Carbon Reduction',
    description: 'Significant environmental impact achieved',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Leaf,
    value: '1.2M',
    label: 'Trees Equivalent',
    description: 'CO2 offset through our projects',
    color: 'from-green-400 to-blue-500'
  }
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-beam-dark to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how BEAM Energy is making a real difference in the transition to sustainable energy 
            and building a cleaner future for generations to come.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Join the Energy Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every customer, every project, and every kilowatt-hour brings us closer to a sustainable future. 
              Be part of the solution and help us reach our next milestone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-beam-yellow mb-2">2025 Goal</div>
                <div className="text-3xl font-bold">5 GW</div>
                <div className="text-sm text-gray-300">Renewable Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-beam-yellow mb-2">2025 Goal</div>
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-sm text-gray-300">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-beam-yellow mb-2">2025 Goal</div>
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm text-gray-300">Carbon Reduction</div>
              </div>
            </div>
            
            <button className="btn-primary bg-white text-beam-dark hover:bg-gray-100">
              Support Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
