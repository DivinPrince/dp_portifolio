import { pageOuterClass } from '@/lib/ui'

export default function PageShell({ children }) {
  return (
    <div className={pageOuterClass}>
      <div className="page-shell">{children}</div>
    </div>
  )
}
