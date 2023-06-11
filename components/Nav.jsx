import React from 'react'
import Image from 'next/image'
import { links } from './constants'
import Pagelink from './Pagelink'

export default function Nav() {
    const Links = links.map(link =>(
        <Pagelink 
            key={links.indexOf(link)}
            {...link}
        />
    ))
  return (
    <>
        <div className="desk">
                <ul className='links'>
                    {Links}
                </ul>
        </div>
        <div className="mob"></div>
    </>
  )
}
