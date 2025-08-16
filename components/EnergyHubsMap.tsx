'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Zap, Fuel, Sun, Navigation } from 'lucide-react'

interface EnergyHub {
  id: number
  name: string
  type: string
  coordinates: { lat: number; lng: number }
  city: string
  capacity: string
  status: string
  icon: any
}

// Mock data for demonstration - replace with actual Supabase data
const mockEnergyHubs = [
  {
    id: 1,
    name: 'Solar Farm Alpha',
    type: 'renewable',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    city: 'New York',
    capacity: '50 MW',
    status: 'active',
    icon: Sun
  },
  {
    id: 2,
    name: 'EV Charging Station Downtown',
    type: 'charging',
    coordinates: { lat: 40.7589, lng: -73.9851 },
    city: 'New York',
    capacity: '150 kW',
    status: 'active',
    icon: Zap
  },
  {
    id: 3,
    name: 'Green Fuel Station',
    type: 'fuel',
    coordinates: { lat: 40.7505, lng: -73.9934 },
    city: 'New York',
    capacity: 'Biofuels + EV',
    status: 'active',
    icon: Fuel
  },
  {
    id: 4,
    name: 'Wind Farm Beta',
    type: 'renewable',
    coordinates: { lat: 34.0522, lng: -118.2437 },
    city: 'Los Angeles',
    capacity: '100 MW',
    status: 'active',
    icon: Sun
  },
  {
    id: 5,
    name: 'Highway EV Hub',
    type: 'charging',
    coordinates: { lat: 34.0736, lng: -118.2400 },
    city: 'Los Angeles',
    capacity: '350 kW',
    status: 'active',
    icon: Zap
  }
]

const hubTypes = [
  { key: 'all', label: 'All Hubs', icon: MapPin, color: 'text-gray-600' },
  { key: 'renewable', label: 'Renewable Projects', icon: Sun, color: 'text-green-600' },
  { key: 'charging', label: 'EV Charging', icon: Zap, color: 'text-blue-600' },
  { key: 'fuel', label: 'Fuel Stations', icon: Fuel, color: 'text-yellow-600' }
]

export default function EnergyHubsMap() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedHub, setSelectedHub] = useState<EnergyHub | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 })

  const filteredHubs = selectedType === 'all' 
    ? mockEnergyHubs 
    : mockEnergyHubs.filter(hub => hub.type === selectedType)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'maintenance': return 'bg-yellow-500'
      case 'offline': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-beam-dark mb-4">
            Energy Hubs Network
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our network of renewable energy projects, EV charging stations, and sustainable fuel stations 
            across the country. Find the nearest energy solution to you.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {hubTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`flex items-center px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                selectedType === type.key
                  ? 'border-beam-green bg-beam-green text-white'
                  : 'border-gray-300 hover:border-beam-green hover:bg-beam-green/5'
              }`}
            >
              <type.icon className={`w-5 h-5 mr-2 ${selectedType === type.key ? 'text-white' : type.color}`} />
              {type.label}
            </button>
          ))}
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[500px] relative overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Navigation className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Map integration with Mapbox/Google Maps</p>
                <p className="text-xs mt-2">(Replace with actual map component)</p>
              </div>
            </div>

            {/* Hub Markers */}
            <div className="relative z-10">
              {filteredHubs.map((hub, index) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${((hub.coordinates.lng + 180) / 360) * 100}%`,
                    top: `${((90 - hub.coordinates.lat) / 180) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedHub(hub)}
                >
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full bg-white border-4 border-beam-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <hub.icon className="w-4 h-4 text-beam-green" />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(hub.status)}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hub Details */}
        {selectedHub && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-beam-green to-beam-blue rounded-lg flex items-center justify-center mr-4">
                    <selectedHub.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-beam-dark">{selectedHub.name}</h3>
                    <p className="text-gray-600">{selectedHub.city}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedHub(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-500">Type:</span>
                  <p className="font-medium capitalize">{selectedHub.type}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Capacity:</span>
                  <p className="font-medium">{selectedHub.capacity}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Status:</span>
                  <p className="font-medium capitalize">{selectedHub.status}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Coordinates:</span>
                  <p className="font-medium text-sm">
                    {selectedHub.coordinates.lat.toFixed(4)}, {selectedHub.coordinates.lng.toFixed(4)}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="btn-primary flex-1">
                  Get Directions
                </button>
                <button className="btn-outline">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-beam-green mb-2">
              {mockEnergyHubs.filter(hub => hub.type === 'renewable').length}
            </div>
            <div className="text-gray-600">Renewable Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-beam-blue mb-2">
              {mockEnergyHubs.filter(hub => hub.type === 'charging').length}
            </div>
            <div className="text-gray-600">Charging Stations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-beam-yellow mb-2">
              {mockEnergyHubs.filter(hub => hub.type === 'fuel').length}
            </div>
            <div className="text-gray-600">Fuel Stations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-beam-dark mb-2">
              {mockEnergyHubs.length}
            </div>
            <div className="text-gray-600">Total Hubs</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
