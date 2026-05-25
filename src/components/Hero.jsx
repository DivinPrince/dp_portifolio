import { lazy, Suspense } from 'react'
import { Reveal } from './utils/Reveal'
import Loader from './Loader'
import Section from './Section'
import {
  btnOutlineClass,
  dotClass,
  headerClass,
  heroDescClass,
} from '@/lib/ui'

const EarthCanvas = lazy(() => import('./Earth'))

const Hero = () => {
  return (
    <Section
      id="home"
      className="relative overflow-x-hidden overflow-y-visible"
      innerClassName="relative z-1 flex w-full flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12"
    >
        <div className="relative flex h-fit w-full flex-col items-start justify-center gap-5 sm:w-[52%] sm:shrink-0">
          <Reveal>
            <div className={headerClass}>
              Hey, I&apos;m Divin Prince <span className={dotClass}>.</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="text-xl capitalize tracking-wider text-neutral-200 [&_span]:text-white">
              I&apos;m a <span>Full-Stack Developer</span> &amp; founder of Wreny
            </h1>
          </Reveal>
          <Reveal>
            <p className={heroDescClass}>
              I own product and engineering from idea through production — modern web
              stacks, auth, billing, and shipping end to end. Currently CTO at Dime Inc,
              Cursor Community Ambassador in Kigali, and building Wreny for AI-assisted
              resumes and cover letters. Spin the globe when you need a break.
            </p>
          </Reveal>
          <Reveal>
            <a href="#contact" className={btnOutlineClass}>
              Contact Me
            </a>
          </Reveal>
        </div>

        <Suspense fallback={<Loader />}>
          <EarthCanvas className="mt-2 w-full max-w-[420px] min-h-[320px] sm:mt-0 sm:w-[44%] sm:max-w-none sm:min-h-[420px]" />
        </Suspense>
    </Section>
  )
}

export default Hero
