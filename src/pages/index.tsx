import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage } from 'next'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import Experience from 'components/Experience'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import Footer from 'components/Footer'
 const Home: NextPage = () => {
  return (
    <div className='bg-[#EEEEEE] text-[#5C9EAD] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
                      scrollbar scrollbar-track-[#EEEEEE]/20 scrollbar-thumb-[#5C9EAD]/60  '>
      
      
      <Head>
        <title>Pham's Portfolio</title>
      </Head>
      {/* Header*/}
      <Header />
      {/* Hero*/}
      <section id='hero' className='snap-start'>
        <Hero />

      </section>
      {/* About*/}
      <section id='about' className='snap-center'>
        <About/>
      </section>
        
      {/* Experience*/}
      <section id='experience' className='snap-center'>
      <Experience />
      </section>
      {/* Skills*/}
      <section id="skills" className='snap-start'>
      <Skills />
      </section>
      {/* Projects*/}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact me*/}
      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>
      <section id='footer' className='snap-center'>
        <Footer/>
      </section>
      
    </div>

  );
};

export default Home;