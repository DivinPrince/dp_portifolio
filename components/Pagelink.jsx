'use client'
import React from 'react'
import Image from 'next/image'
import ll from '../public/icons/about.svg'
import { delay, motion } from 'framer-motion';


export default function link(props) {
  console.log(props);
  return (
    <motion.li 
      initial={{opacity: 0,x: -75}}
      animate= {{opacity: 1,x: 0}}
      transition={{duration: 0.5,delay: props.id/4}}
    >
        <a href={`#${props.title}`}>
            <Image src={props.icon} width={30} height={30} alt={props.title} title={props.title} className='link' />
        </a>
    </motion.li>
  )
}
