import { Card, Grid, makeStyles } from '@mui/material'
import React from 'react'
import BasicCard from './BasicCard'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'


type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'> Projects</h3>
    <div className='absolute top-20'>
    <Grid container spacing={2} className='gridcontainer relative'>
      <Grid item xs={12} sm={6}>
        <BasicCard
            project="AIRST-research-paper-summarization"
            tag="React"
            description="This AI tool app built on Streamlit library provides a powerful and user-friendly tool through web interface for accessing key information from healthcare-related academic literature. 
                          Its natural language processing capabilities and intuitive user interface make it an essential AI tool for anyone working in the healthcare industry."
            url="https://github.com/pham0084/AIRST-research-paper-summarization"
         />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BasicCard
            project="Histopathologic-Cancer-Detection"
            tag="React"
            description="This repository contains code for a deep learning model that detects cancerous cells in histopathologic images using computer vision. 
                        The model utilizes ViT (Vision Transformer) and CovNExt (Convolutional Neural Network with Extra-Width and Random-Erasing Augmentation) architectures for training."
            url="https://github.com/pham0084/Histopathologic-Cancer-Detection"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BasicCard
          project="dlw-queue-monitor"
          tag="React"
          description="This is a vision-based people counting system for queue management in public areas. It uses YOLOv3 with DarkNet53 Backbone and mixed precision training.
           You can run the demo on webcam or video. Clone the repo and follow the instructions to set up the dependencies and download the model configs and weights."
          url="https://github.com/pham0084/dlw-queue-monitor"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BasicCard 
        project="
        cinema-recommendation-systems"
        tag="React"
        description="This repository contains a cinema recommendation system in Python using Pygame and Pygame-menu libraries. It offers an interactive menu with pricing information for multiple movie theater chains,
         and utilizes sorting algorithms and pattern recognition to suggest cinemas based on location, price, and availability."
        url="https://github.com/pham0084/cinema-recommendation-systems"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BasicCard 
        project="nextjs-ts-portfolio"
        tag="React"
        description="This is my portfolio website, built with Next.js and TypeScript. It showcases my skills, experience, and projects with a clean design. Fully responsive, optimized for different devices,
         and enhanced with Material UI and framer motion. Code available on GitHub for easy customization. Thanks for visiting!"
        url="https://github.com/pham0084/nextjs-ts-portfolio" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BasicCard 
        project="My Awesome Project"
        tag="React"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam id nisi consequat posuere. Praesent eu nisi ac leo viverra tristique. Nulla dapibus justo sit amet dolor condimentum, at dapibus sapien lobortis. Quisque quis neque vel enim finibus tristique."
        url="https://github.com"
        />
      </Grid>
    </Grid>
    

    <div className=" flex flex-col justify-evenly items-center text-center p-10 rounded-2xl">
        <Link href='https://github.com/pham0084' className='absolute bottom-8 uppercase tracking-[3px] text-gray-500 text-sm'>
          
          More interesing projects in my github
          </Link>
        <SocialIcon
          style={{ height: 90, width: 90 }}
          className="icon-hover "
          url="https://github.com/pham0084"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          />
    
    </div>
  </div>
</div>

  
    
    
  )
}

export default Projects