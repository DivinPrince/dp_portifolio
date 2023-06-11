import React from 'react'
import { Reveal } from './utils/Reveal'

export default function Lang(props) {
  return (
    <Reveal>
        <div className='lang'>{props.name}</div>
    </Reveal>
  )
}
