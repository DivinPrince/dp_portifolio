export default function Pagelink({ title, Icon, active }) {
  return (
    <li>
      <a
        href={`#${title}`}
        aria-current={active ? 'true' : undefined}
        title={title}
        className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
      >
        <Icon
          className={
            active
              ? 'text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-700'
          }
        />
      </a>
    </li>
  )
}
