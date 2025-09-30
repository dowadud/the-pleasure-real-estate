import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Properties from '@/components/Properties'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Properties />
      <About />
      <Footer />
    </main>
  )
}