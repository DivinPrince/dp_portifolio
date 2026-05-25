import { visit_ico } from '@public/icons'
import { cardBorderClass, langPillClass, mutedTextClass, titleFontClass } from '@/lib/ui'

export default function Project(props) {
  const langs = props.langs.map((lang) => (
    <span key={lang.name} className={langPillClass}>
      {lang.name}
    </span>
  ))

  return (
    <article
      className={`flex w-full flex-col ${cardBorderClass} sm:max-w-[320px] sm:flex-1 sm:basis-[280px]`}
    >
      <div className="relative aspect-[16/10] w-full border-b border-neutral-800">
        {props.img ? (
          <img
            src={props.img}
            alt={props.name}
            className="h-full w-full object-cover grayscale"
          />
        ) : (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full flex-col items-center justify-center gap-1 bg-neutral-950 px-3"
          >
            <span className="text-lg font-bold tracking-tight text-white">
              {props.name}
            </span>
            <span className={`text-xs ${mutedTextClass}`}>
              {props.link?.replace(/^https?:\/\//, '')}
            </span>
          </a>
        )}
      </div>

      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`text-base font-bold leading-tight ${titleFontClass}`}>
            {props.name}
          </h3>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 opacity-60 transition-opacity hover:opacity-100"
              aria-label={`Visit ${props.name}`}
            >
              <img src={visit_ico} alt="" width={18} height={18} />
            </a>
          )}
        </div>

        <p className={`line-clamp-2 text-xs leading-snug ${mutedTextClass}`}>
          {props.details}
        </p>

        <div className="flex flex-wrap gap-1.5">{langs}</div>
      </div>
    </article>
  )
}
