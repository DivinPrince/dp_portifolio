import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Reveal = ({ children, fullWidth = false }) => {
  const ref = useRef(null)
  const inview = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inview) {
      controls.start('visible')
    }
  }, [inview, controls])

  return (
    <div
      ref={ref}
      className={fullWidth ? 'w-full min-w-0 overflow-hidden' : 'w-fit overflow-hidden'}
    >
      <motion.div
        className={fullWidth ? 'w-full' : undefined}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
