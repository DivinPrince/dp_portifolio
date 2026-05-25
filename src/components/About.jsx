import { Reveal } from './utils/Reveal'
import { BiHappy, BiTerminal } from 'react-icons/bi'
import { socials, useFun, useWork } from './constants'
import Lang from './Lang'
import Social from './Social'
import Section from './Section'
import {
  dotClass,
  headerClass,
  sectionDescClass,
  subTextClass,
} from '@/lib/ui'

export default function About() {
  const work = useWork.map((lang) => (
    <Lang key={useWork.indexOf(lang)} {...lang} />
  ))
  const fun = useFun.map((lang) => (
    <Lang key={useFun.indexOf(lang)} {...lang} />
  ))
  const Socials = socials.map((link) => (
    <Social key={socials.indexOf(link)} {...link} />
  ))

  return (
    <Section id="about">
        <div className="relative flex h-fit w-full flex-col items-start justify-center gap-5">
          <Reveal>
            <div className={headerClass}>
              About <span className={dotClass}>.</span>
            </div>
          </Reveal>
          <div className="flex flex-col sm:flex-row">
            <div className="my-[50px] flex flex-col gap-[50px]">
              <Reveal>
                <p className={sectionDescClass}>
                  I&apos;m Irasubiza Divin Prince — a full-stack developer based in Kigali. I
                  build and operate web products end to end: product decisions, implementation,
                  deployment, and the billing and auth layers that keep them running in
                  production.
                </p>
              </Reveal>
              <Reveal>
                <p className={sectionDescClass}>
                  I founded Wreny, an AI-assisted resume and cover letter platform, and serve as
                  CTO at Dime Inc where I lead client delivery across mobile apps, e-commerce,
                  and internal tools — including an education marking platform that gives
                  students structured feedback and helps teachers grade faster with class-level
                  insight.
                </p>
              </Reveal>
              <Reveal>
                <p className={sectionDescClass}>
                  My stack centers on TypeScript, React, Next.js, TanStack, and Tailwind on the
                  frontend, with PostgreSQL, Convex, Supabase, Bun, and Docker on the backend. I
                  use AI tooling — including Cursor — to ship faster without cutting corners on
                  quality, and I host local builder events as a Cursor Community Ambassador.
                </p>
              </Reveal>
              <Reveal>
                <p className={sectionDescClass}>
                  I graduated from ESTG (Ecole Secondaire Technique de Gisenyi) in software
                  development, hold Vercel&apos;s Next.js App Router certification, and speak
                  Kinyarwanda, English, French, and German. Outside of code: football, skating,
                  and agentic engineering.
                </p>
              </Reveal>
              <Reveal>
                <div className="flex items-center gap-5">
                  <p className={subTextClass}>My links →</p>
                  {Socials}
                </div>
              </Reveal>
            </div>
            <div className="flex w-full flex-wrap gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-xl">
                  <BiTerminal className={`${subTextClass} text-[30px]`} />
                  <h1 className="font-extrabold">Use at work</h1>
                </div>
                <div className="flex flex-wrap gap-2.5">{work}</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-xl">
                  <BiHappy className={`${subTextClass} text-[30px]`} />
                  <h1 className="font-extrabold">Use for fun</h1>
                </div>
                <div className="flex flex-wrap gap-2.5">{fun}</div>
              </div>
            </div>
          </div>
        </div>
    </Section>
  )
}
