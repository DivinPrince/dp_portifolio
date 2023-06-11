'use client'
import React from 'react'
import { Reveal } from './utils/Reveal'
import { projects } from './constants'
import Project from './Project'

export default function Projects() {
    let pros = projects.map(project =>(
        <Project
            key={projects.indexOf(project)}
            {...project}
        />
    ))
    return (
        <section className='section' id='projects'>
            <div className="w-full items-end px-[10px] sm:px-[100px]">
                <Reveal>
                    <div className="header m-5">Projects <span className='dot'>.</span></div>
                </Reveal>
                <div className="project_container flex flex-wrap gap-[20px] justify-center">
                    {pros}
                </div>
            </div>
        </section>
    )
}