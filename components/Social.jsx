import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Social(props) {
    return (
        <motion.li
            variants={{
                start: { opacity: 0, y: -75 },
                finish: { opacity: 1, y: 0 }
            }}
            initial='start'
            animate='finish'
            transition={{delay: props.id / 4 }}

        >
            <a href={`#${props.link}`}>
                <Image src={props.img} width={30} height={30} alt={props.title} title={props.title} className='link' />
            </a>
        </motion.li>
    )
}
