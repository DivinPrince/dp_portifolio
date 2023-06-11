'use client'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { links, socials } from './constants'
import Pagelink from './Pagelink'
import Social from './Social'

export default function Nav() {
    const [isvisble, setIsvisble] = useState(true)
    const controls = useAnimation()
    useEffect(() => {
        controls.start('finish')

    }, [isvisble])
    const Links = links.map(link => (
        <Pagelink
            key={links.indexOf(link)}
            vis={isvisble}
            {...link}
        />
    ))
    const Socials = socials.map(link => (
        <Social
            key={socials.indexOf(link)}
            {...link}
        />
    ))

    return (
        <>
            <div className="top_nav">
                <div className='flex'>
                    <div className="toogle_nav" onClick={() => { setIsvisble(!isvisble); }}>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 108">
                            <g>
                                <rect className="menu" x="9" y="18" width="18" height="18" rx="9" ry="9" />
                                <rect className="menu" x="36" y="18" width="18" height="18" />
                                <rect className="menu" x="63" y="18" width="18" height="18" />
                                <rect className="menu" x="90" y="18" width="18" height="18" rx="9" ry="9" />
                                <rect className="menu" x="9" y="45" width="18" height="18" />
                                <rect className="menu" x="36" y="45" width="18" height="18" rx="9" ry="9" />
                                <rect className="menu" x="63" y="45" width="18" height="18" rx="9" ry="9" />
                                <rect className="menu" x="90" y="45" width="18" height="18" />
                                <rect className="menu" x="9" y="72" width="18" height="18" rx="8.7" ry="8.7" />
                                <rect className="menu" x="36" y="72" width="18" height="18" />
                                <rect className="menu" x="63" y="72" width="18" height="18" />
                                <rect className="menu" x="90" y="72" width="18" height="18" rx="9" ry="9" />
                            </g>
                        </svg>
                    </div>
                    <ul className='socials'>
                        {Socials}
                    </ul>
                </div>
                <button className='btn_outline'>
                    My resume
                </button>
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0, y: '-50%' }
                }}
                initial="hidden"
                animate={`${isvisble ? 'visible' : 'hidden'}`}
                className="desk">
                <ul className='links'>
                    {Links}
                </ul>
            </motion.div>
        </>
    )
}
