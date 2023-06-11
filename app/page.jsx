import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  )
}
