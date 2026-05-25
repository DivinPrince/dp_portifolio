import { Reveal } from './utils/Reveal'
import { projects } from './constants'
import Project from './Project'
import Section from './Section'
import { dotClass, headerClass } from '@/lib/ui'

export default function Projects() {
  const pros = projects.map((project) => (
    <Project key={projects.indexOf(project)} {...project} />
  ))

  return (
    <Section id="projects" innerClassName="w-full">
      <Reveal>
        <div className={headerClass}>
          Projects <span className={dotClass}>.</span>
        </div>
      </Reveal>
      <div className="mt-6 flex flex-wrap gap-4">{pros}</div>
    </Section>
  )
}
