import { createFileRoute } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import PageShell from '@/components/PageShell'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Nav />
      <PageShell>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </PageShell>
    </>
  )
}
