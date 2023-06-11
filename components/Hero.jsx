'use client'
import React from 'react'
import { Reveal } from './utils/Reveal'

const Hero = () => {
	return (
		<section className='section' id='home'>
			<div className="hero">
				<Reveal>
					<div className="header">Hey, I'm dp <span className='dot'>.</span></div>
				</Reveal>
				<Reveal>
					<h1 className='sub_header'>
						I'm a <span>frontend developer</span>
					</h1>
				</Reveal>
				<Reveal>
					<p className='desc'>
						I started programming 2 years ago and I made many projects
						studying and some cool comapanies, I also like playing football
						after work(infact you got a nice ball portfolio to kick)
					</p>
				</Reveal>
				<Reveal>
					<button>Contact Me</button>
				</Reveal>
			</div>
		</section>
	)
}

export default Hero