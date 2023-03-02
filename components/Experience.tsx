import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  const experiences = [
    {
      company: 'Institution of Engineers Singapore',
      jobTitle: 'Infotech - Software Developer',
      startDate: 'Aug 2022',
      endDate: 'Present',
      description: [
        '• Built a website with team for IES NTU Student Branch using Node.js and Reactjs, published through GitHub’s platform',
        '• Speaker of Machine Learning workshop – Intro to Computer Vision with Python',
        '• Speaker of CodeWars IES X IEEE, a workshop on advanced algorithms including time complexity analysis, hashing, recursion, and dynamic programming for around 300 people'
      ],
      image: 'ieslogo.jpeg',
      skills: ['python.jpeg', 'javascript.jpeg', 'html5.jpeg', 'css3.jpeg', 'react.jpeg', 'tailwind.jpeg']
    },
    {
      company: 'Nanyang Technological University, Singapore',
      jobTitle: 'Bachelor of Engineer, Electrical & Electronic Engineering',
      startDate: ' Aug 2021',
      endDate: 'May 2025 ',
      description: [
        '• Specialized in Info-Communications Engineering (Computer Engineering)',
        '• Member of EEE Inter School Game Soccer Team',
        '• Member of Inter Hall XV Soccer Team',
        '• Volunteer at Welfare Services Club'
      ],
      image: 'ntu.jpeg ',
      skills: [' python.jpeg', 'cpp.jpeg']
    },
    // more
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center"
    >
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[#EEEEEE]/20 scrollbar-thumb-[#5C9EAD]/30'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            jobTitle={experience.jobTitle}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            image={experience.image}
            skills={experience.skills}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
