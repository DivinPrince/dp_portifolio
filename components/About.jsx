'use client'
import React from 'react'
import { Reveal } from './utils/Reveal'
import Image from 'next/image'
import profile from '../public/FB_IMG_16804529379420381.jpg'
import { BiHappy, BiTerminal, } from 'react-icons/bi';
import { socials, useFun, useWork } from './constants';
import Lang from './Lang';
import Social from './Social';

export default function About() {
	const work = useWork.map(lang => (
		<Lang
			key={useWork.indexOf(lang)}
			{...lang}
		/>
	))
	const fun = useFun.map(lang => (
		<Lang
			key={useFun.indexOf(lang)}
			{...lang}
		/>
	))
	const Socials = socials.map(link => (
		<Social
			 key={socials.indexOf(link)}
			 {...link}
		/>
  ))
	return (
		<section className='section' id='about'>
			<div className="hero">
				<Reveal>
					<div className="header">About <span className='dot'>.</span></div>
				</Reveal>
				<div className='flex flex-col sm:flex-row'>
					<div className='flex flex-col gap-[50px] my-[50px]'>
						<Reveal>
							<p className='desc'>
							Greetings! I'm Dp, short for Divin Prince, a dynamic and passionate software developer hailing from the vibrant country of Rwanda. While my journey began on the football field, destiny had something extraordinary in store for me—I discovered my innate talent for coding, and I haven't looked back since!
							</p>
						</Reveal>
						<Reveal>
							<p className='desc'>
							Currently pursuing my studies at ESTG l3, I am immersing myself in the world of software development, eager to transform my passion into a fulfilling career. With a specialization in Frontend development, I have unleashed my creativity to craft captivating user interfaces that seamlessly connect with end-users. By blending intuitive design with cutting-edge technologies, I strive to deliver immersive and delightful digital experiences.
							</p>
						</Reveal>
						<Reveal>
							<p className='desc'>
								Frameworks are my secret sauce! I'm absolutely enamored with exploring and leveraging a wide array of frameworks to enhance productivity and unleash the true potential of my projects. I am constantly on the lookout for the latest and greatest tools and technologies that can elevate my work to new heights. Whether it's React, Angular, or Vue.js, I embrace whichever framework best suits the task at hand, always staying ahead of the curve.
							</p>
						</Reveal>
						<Reveal>
							<p className='desc'>
							Through this captivating portfolio, I invite you to join me on a journey through my innovative world of frontend development. Witness firsthand my commitment to blending artistic vision with technical expertise to bring ideas to life. Each line of code I write is infused with passion, precision, and an unwavering attention to detail.
							</p>
						</Reveal>
						<Reveal>
							<div className='flex items-center gap-[20px]'>
								<p className='sub_text'>My links →</p>
								{Socials}
							</div>
						</Reveal>
					</div>
					<div className="uses w-[100%] flex flex-wrap gap-[20px]">
						<div className="work flex flex-col gap-[20px]">
							<div className='flex items-center gap-2 text-[20px]'>
								<BiTerminal className='sub_text text-[30px]' />
								<h1 className='font-extrabold'>Use at work</h1>
							</div>
							<div className='flex flex-wrap gap-[10px]'>
								{work}
							</div>
						</div>
						<div className="fun flex flex-col gap-[20px]">
							<div className='flex items-center gap-2 text-[20px]'>
								<BiHappy className='sub_text text-[30px]' />
								<h1 className='font-extrabold'>Use for fun</h1>
							</div>
							<div className='flex flex-wrap gap-[10px]'>
								{fun}
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}