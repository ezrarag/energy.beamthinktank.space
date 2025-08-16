import CitySelector from '@/components/CitySelector'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import EnergyHubsMap from '@/components/EnergyHubsMap'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CitySelector />
      <ServicesOverview />
      <Stats />
      <EnergyHubsMap />
      <CTA />
    </main>
  )
}
