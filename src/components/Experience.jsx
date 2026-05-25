import { Reveal } from './utils/Reveal'
import Timeline from './Timeline'
import { expert } from './constants'
import { brief_ico, school_ico } from '@public/icons'
import Section from './Section'
import { dotClass, headerClass } from '@/lib/ui'

export default function Experience() {
  return (
    <Section id="experience" innerClassName="w-full">
      <Reveal>
        <div className={headerClass}>
          Experience <span className={dotClass}>.</span>
        </div>
      </Reveal>
      <Timeline
        items={expert}
        getIconSrc={(entry) => (entry.icon === 'work' ? brief_ico : school_ico)}
      />
    </Section>
  )
}
