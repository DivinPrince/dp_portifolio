import { sectionContentClass, sectionInnerClass } from '@/lib/ui'

export default function Section({
  id,
  children,
  className = '',
  innerClassName = '',
  divider = true,
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className={sectionContentClass}>
        <div className={`${sectionInnerClass} ${innerClassName}`}>{children}</div>
      </div>
      {divider ? <div aria-hidden className="slash-divider" /> : null}
    </section>
  )
}
