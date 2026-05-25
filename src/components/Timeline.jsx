import { Reveal } from './utils/Reveal'
import { cardBorderClass, mutedTextClass } from '@/lib/ui'

function TimelineItem({ entry, iconSrc, isLast }) {
  return (
    <Reveal>
      <div className={`relative pl-14 md:pl-16 ${isLast ? '' : 'pb-8 md:pb-10'}`}>
        <div
          className={`absolute top-1 left-0 z-10 flex h-10 w-10 items-center justify-center ${cardBorderClass} bg-black`}
        >
          <img src={iconSrc} width={22} height={22} alt="" />
        </div>

        <article className={`${cardBorderClass} p-4 md:p-5`}>
          <time className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            {entry.date}
          </time>
          <h3 className="mt-1 text-lg font-bold text-white">{entry.title}</h3>
          <p className="mt-0.5 text-sm text-neutral-300">{entry.company}</p>
          {entry.location && (
            <p className={`mt-0.5 text-xs ${mutedTextClass}`}>{entry.location}</p>
          )}
          <p className={`mt-2 text-sm leading-relaxed ${mutedTextClass}`}>
            {entry.description}
          </p>
        </article>
      </div>
    </Reveal>
  )
}

export default function Timeline({ items, getIconSrc }) {
  return (
    <div className="relative mt-10 w-full max-w-3xl">
      <div
        className="absolute top-2 bottom-2 left-5 w-px bg-neutral-700"
        aria-hidden="true"
      />

      <div className="relative">
        {items.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            iconSrc={getIconSrc(entry)}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
