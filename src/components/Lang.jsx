import { Reveal } from './utils/Reveal'
import { langPillClass } from '@/lib/ui'

export default function Lang(props) {
  return (
    <Reveal>
      <div className={langPillClass}>{props.name}</div>
    </Reveal>
  )
}
