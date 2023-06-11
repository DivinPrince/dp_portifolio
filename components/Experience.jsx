'use client'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Reveal } from './utils/Reveal'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { expert } from './constants'
import { brief_ico, school_ico } from '@/public/icons'
import Image from 'next/image'

export default function Experience() {
   let work = {background: 'red'}
   let school = {background: '#111111'}
    return (
        <section className='section' id='experience'>
            <div className="w-full items-end px-[40px] sm:px-[100px]">
                <Reveal>
                    <div className="header m-5">Experience <span className='dot'>.</span></div>
                </Reveal>
               <VerticalTimeline>
                  {
                     expert.map(element =>{
                        let iswork = element.icon === 'work';
                        return (
                        <VerticalTimelineElement
                           key={element.key}
                           date={element.date}
                           dateClassName='date'
                           iconStyle={{background: 'black'}}
                           icon={
                              <div className='flex justify-center items-center w-full h-full'>
                                 <Image src={iswork? brief_ico: school_ico} width={30} alt="kckc" />
                              </div>
                           }
                           contentArrowStyle={{borderRight: '7px solid grey'}}
                           contentStyle={{border: '1px solid grey',background: 'transparent'}}
                        >
                           <h1 className='font-bold text-[20px]'>{element.title}</h1>
                           <p className='text-[#ff7600]'>{element.company}</p>
                           <p className='desc'>{element.description}</p>
                        </VerticalTimelineElement>)
                     }
                     )
                  }
               </VerticalTimeline>
            </div>
        </section>
    )
}
