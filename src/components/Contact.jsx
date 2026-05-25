import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { BiEnvelope, BiMap, BiTimeFive } from 'react-icons/bi'
import { Reveal } from './utils/Reveal'
import { contactInfo, socials } from './constants'
import Social from './Social'
import Section from './Section'
import {
  btnOutlineClass,
  cardBorderClass,
  dotClass,
  headerClass,
  mutedTextClass,
  sectionDescClass,
  subTextClass,
} from '@/lib/ui'

const iconMap = {
  email: BiEnvelope,
  location: BiMap,
  availability: BiTimeFive,
}

const emailJsConfigured =
  import.meta.env.VITE_EMAILJS_SERVICE_ID &&
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const Socials = socials.map((link) => (
    <Social key={socials.indexOf(link)} {...link} />
  ))

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    if (emailJsConfigured) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
          },
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        )
        setForm(initialForm)
        setStatus('success')
        return
      } catch {
        setStatus('error')
        return
      }
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <Section id="contact" innerClassName="w-full" divider={false}>
        <Reveal>
          <div className={headerClass}>
            Contact <span className={dotClass}>.</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Let&apos;s build something together.
                </h2>
                <p className={sectionDescClass}>
                  Whether you have a product idea, a freelance brief, or just want to
                  talk shop — I read every message and usually reply within a day or two.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-3">
              {contactInfo.items.map((item) => {
                const Icon = iconMap[item.icon]
                const content = (
                  <div
                    className={`group flex items-start gap-4 p-4 transition-colors ${cardBorderClass} hover:border-neutral-600`}
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-800 bg-neutral-950 text-white transition-colors group-hover:border-white">
                      <Icon className="text-xl" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )

                return (
                  <Reveal key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal>
              <div className="flex items-center gap-5">
                <p className={subTextClass}>My links →</p>
                {Socials}
              </div>
            </Reveal>
          </div>

          <Reveal fullWidth>
            <form
              onSubmit={handleSubmit}
              className={`flex w-full flex-col gap-5 p-6 sm:p-8 ${cardBorderClass} bg-neutral-950/50`}
            >
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-neutral-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-neutral-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or what you're building."
                  className="w-full resize-none border border-neutral-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`${btnOutlineClass} w-fit disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-emerald-400">
                  Message ready — thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email me directly at{' '}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="underline underline-offset-2 hover:text-white"
                  >
                    {contactInfo.email}
                  </a>
                  .
                </p>
              )}
              {!emailJsConfigured && status === 'idle' && (
                <p className={`text-xs ${mutedTextClass}`}>
                  Submit opens your email client with the message pre-filled.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal>
          <p className={`mt-16 text-center text-xs ${mutedTextClass}`}>
            © {new Date().getFullYear()} Divin Prince · Built with React &amp; Vite
          </p>
        </Reveal>
    </Section>
  )
}
