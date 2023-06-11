'use client'
import React,{useEffect,useRef} from "react"
import { motion,useInView,useAnimation } from "framer-motion"
export const Reveal = ({children})=>{
    const ref = useRef(null)
    const inview = useInView(ref,{once: true})
    const controls = useAnimation()
    useEffect(()=>{
        if (inview) {
            controls.start('visible')
        }
        console.log(inview);
    },[inview])
    return (
        <div ref={ref} className="reveal" style={{width: 'fit-content',overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0,y: 75},
                    visible: {opacity:1,y:0}
                }}
                initial="hidden"
                animate={controls}
                transition={{duration: 0.5,delay:0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}
