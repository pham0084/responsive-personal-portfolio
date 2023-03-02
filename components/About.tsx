import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16  uppercase tracking-[20px] text-gray-400 text-2xl codefont'>About</h3>
        <motion.img
        initial={{
            x:-400,
        }}
        transition={{
            duration:1.5,
        }}
        whileInView={{opacity:1, x:0}}
         src="image3.jpeg" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-sm md:w-64 md:h-95 xl:h-[500px] xl:w-[500px] mx-auto '/>
    <div className='space y-10 px-0 md:px-10'>
        <h4 className='text-4xl codefont font-semibold mx-auto max-w-5xl '>
            Here is my little background
        </h4>
        <br></br>
        <p className='text-md codefont text-gray-500'> 
        <ul>
  <li>NTU student with a passion for software, football, and coffee</li>
  <li>Interested in machine learning, front-end development, and creating engaging user experiences</li>
  <li>Fast learner and team player with high adaptability in new environments</li>
  <li>Enjoys playing or watching football and exploring coffee shops and trying out new blends and brewing methods</li>
  <li>Excited about a career in software development and eager to continue learning and growing in the field</li>
</ul>
        </p>
    </div>
    
    </div>
  )
}