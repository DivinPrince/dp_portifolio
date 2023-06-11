'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ll from '../public/icons/about.svg'
import { delay, motion, useAnimation } from 'framer-motion';


export default function link(props) {
  console.log(props);
  const controls = useAnimation()
  useEffect(()=>{
    if (props.vis) {
      controls.start('finish')
    }else{
      controls.start('start')
    }
  },[props.vis])
  return (
    <motion.li 
      variants={{
        start: {opacity: 0,x: -75},
        finish: {opacity: 1,x: 0},
      }}
      initial='start'
      animate={controls}
      transition={{delay: props.id/4}}
    >
        <a href={`#${props.title}`}>
            <Image src={props.icon} width={30} height={30} alt={props.title} title={props.title} className='link' />
        </a>
    </motion.li>
  )
}
