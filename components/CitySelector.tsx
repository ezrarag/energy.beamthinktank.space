'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ChevronDown, Search } from 'lucide-react'

const cities = [
  { name: 'New York', state: 'NY', region: 'Northeast' },
  { name: 'Los Angeles', state: 'CA', region: 'West Coast' },
  { name: 'Chicago', state: 'IL', region: 'Midwest' },
  { name: 'Houston', state: 'TX', region: 'South' },
  { name: 'Phoenix', state: 'AZ', region: 'Southwest' },
  { name: 'Philadelphia', state: 'PA', region: 'Northeast' },
  { name: 'San Antonio', state: 'TX', region: 'South' },
  { name: 'San Diego', state: 'CA', region: 'West Coast' },
  { name: 'Dallas', state: 'TX', region: 'South' },
  { name: 'San Jose', state: 'CA', region: 'West Coast' },
]

export default function CitySelector() {
  const [selectedCity, setSelectedCity] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-beam-dark mb-4">
            Find Energy Solutions Near You
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Select your city to discover renewable energy projects, EV charging stations, 
            and sustainable initiatives in your area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full max-w-md mx-auto bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-beam-green transition-colors duration-200"
            >
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <span className={selectedCity ? 'text-gray-900' : 'text-gray-500'}>
                  {selectedCity || 'Select your city'}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-md mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-3 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search cities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-beam-green focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="max-h-60 overflow-y-auto">
                  {filteredCities.map((city) => (
                    <button
                      key={`${city.name}-${city.state}`}
                      onClick={() => {
                        setSelectedCity(`${city.name}, ${city.state}`)
                        setIsOpen(false)
                        setSearchTerm('')
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="font-medium text-gray-900">{city.name}, {city.state}</div>
                      <div className="text-sm text-gray-500">{city.region}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <div className="bg-beam-green/10 border border-beam-green/20 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-beam-green font-medium">
                  Showing energy solutions for <span className="font-semibold">{selectedCity}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Discover renewable projects, charging stations, and more in your area
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
