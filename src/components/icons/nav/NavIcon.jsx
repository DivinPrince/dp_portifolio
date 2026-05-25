export default function NavIcon({ children, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-7 w-7 shrink-0 ${className}`}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}
