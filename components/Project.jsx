import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { github_ico } from '@/public/icons'
import { Reveal } from './utils/Reveal'

export default function Project(props) {
	let langs = props.langs.map(lang => {
		return <div className='lang'>{lang.name}</div>
	})
	return (
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450
			}}
			className=" card p-3 rounded-2xl sm:w-[360px] w-full flex flex-col gap-3"
		>
			<div className='relative w-full h-[230px]'>
				<Image
					src={props.img}
					alt={props.name}
					className='w-full h-full object-cover rounded-2xl'
				/>
			</div>
			<div className='flex items-center justify-between'>
				<h1 className='font-extrabold font'>{props.name}</h1>
				<Image
					src={github_ico}
					alt='github'
					width={25}
					height={25}
				/>
			</div>
			<div className='flex flex-wrap gap-[10px]'>
				{langs}
			</div>
			{/* <p className='font text-[14px]'>{props.details}</p> */}
		</Tilt>
	)
}
