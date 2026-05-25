import { useState } from 'react'
import { links, socials } from './constants'
import Pagelink from './Pagelink'
import Social from './Social'
import { btnOutlineClass } from '@/lib/ui'
import { useActiveSection } from '@/hooks/useActiveSection'

export default function Nav() {
  const [isvisble, setIsvisble] = useState(true)
  const scrollSections = ['home', 'about', 'projects', 'experience', 'contact']
  const activeSection = useActiveSection(scrollSections)

  const Links = links.map((link) => (
    <Pagelink
      key={link.id}
      active={activeSection === link.title}
      {...link}
    />
  ))
  const Socials = socials.map((link) => (
    <Social key={socials.indexOf(link)} {...link} />
  ))

  return (
    <>
      <div className="fixed top-0 z-40 flex w-full justify-between border-b border-neutral-800 bg-black/80 px-5 py-2 backdrop-blur-md sm:px-10">
        <div className="flex">
          <div className="toogle_nav" onClick={() => setIsvisble(!isvisble)}>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 117 108"
              className="h-[45px] w-[45px] cursor-pointer"
            >
              <g>
                <rect className="fill-white" x="9" y="18" width="18" height="18" />
                <rect className="fill-white" x="36" y="18" width="18" height="18" />
                <rect className="fill-white" x="63" y="18" width="18" height="18" />
                <rect className="fill-white" x="90" y="18" width="18" height="18" />
                <rect className="fill-white" x="9" y="45" width="18" height="18" />
                <rect className="fill-white" x="36" y="45" width="18" height="18" />
                <rect className="fill-white" x="63" y="45" width="18" height="18" />
                <rect className="fill-white" x="90" y="45" width="18" height="18" />
                <rect className="fill-white" x="9" y="72" width="18" height="18" />
                <rect className="fill-white" x="36" y="72" width="18" height="18" />
                <rect className="fill-white" x="63" y="72" width="18" height="18" />
                <rect className="fill-white" x="90" y="72" width="18" height="18" />
              </g>
            </svg>
          </div>
          <ul className="mx-5 flex items-center gap-5">{Socials}</ul>
        </div>
        <a
          href="/my-resume.pdf"
          download="Divin-Prince-Resume.pdf"
          className={btnOutlineClass}
        >
          My resume
        </a>
      </div>
      <div
        className={`fixed top-1/2 left-[2%] z-40 hidden h-[500px] w-[72px] -translate-y-1/2 flex-col items-center rounded-xl border border-neutral-200 bg-white p-2 shadow-lg sm:flex [@media(max-height:640px)]:h-[280px] ${
          isvisble ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex h-full flex-col justify-around gap-5">{Links}</ul>
      </div>
    </>
  )
}
