import { BiEnvelope } from 'react-icons/bi'

export default function Social({ link, img, Icon, title }) {
  const isExternal = link.startsWith('http')

  return (
    <li>
      <a
        href={link}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={title}
        title={title}
      >
        {Icon ? (
          <Icon
            aria-hidden
            className="h-[30px] w-[30px] text-white opacity-70 transition-opacity hover:opacity-100"
          />
        ) : (
          <img
            src={img}
            width={30}
            height={30}
            alt={title}
            title={title}
            className="opacity-70 transition-opacity hover:opacity-100"
          />
        )}
      </a>
    </li>
  )
}
