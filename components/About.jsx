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
								Hey , I'm Dp which means Divin Prince I'm a
								software developer from Rwanda I'm still a student
								at ESTG l3. I used to play football but in ways I don't
								know I became a Developer. I specialized in Frontend and also
								like using frame works even whatever better for my job.
							</p>
						</Reveal>
						<Reveal>
							<p className='desc'>
								Hey , I'm Dp which means Divin Prince I'm a
								software developer from Rwanda I'm still a student
								at ESTG l3. I used to play football but in ways I don't
								know I became a Developer. I specialized in Frontend and also
								like using frame works even whatever better for my job.
							</p>
						</Reveal>
						<Reveal>
							<p className='desc'>
								Hey , I'm Dp which means Divin Prince I'm a
								software developer from Rwanda I'm still a student
								at ESTG l3. I used to play football but in ways I don't
								know I became a Developer. I specialized in Frontend and also
								like using frame works even whatever better for my job.
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