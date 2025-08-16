import CitySelector from '@/components/CitySelector'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import EnergyHubsMap from '@/components/EnergyHubsMap'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">BEAM Energy Site</h1>
        <p className="text-lg text-gray-600 mb-8">Testing basic rendering...</p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <p className="text-gray-800">If you can see this, basic rendering is working!</p>
        </div>
      </div>
      
      {/* Testing Hero component */}
      <Hero />
      
      {/* Temporarily commented out for debugging
      <CitySelector />
      <ServicesOverview />
      <Stats />
      <EnergyHubsMap />
      <CTA />
      */}
    </main>
  )
}
