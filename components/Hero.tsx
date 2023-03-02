import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I am Pham Viet Hung.",
            "EEE@NTU Student",
            "Specialized in ComputerEngineering",
            "Really-love-to-play-soccer",
            "<LoveToCodeToo />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-40 w-40 mx-auto object-cover'
                src="image1.JPG" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> Aspiring Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl front-semibold px-10 '>
                    <span className='mr-3 codefont'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    {/* 
                     */}
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1I_xDOfUHBDiQLHL6fioXDFHOucqh9ecP/view?usp=sharing' target="_blank">
                        <button className='heroButton'>Resume</button>
                    </Link>


                </div>

            </div>
        </div>
    )
}