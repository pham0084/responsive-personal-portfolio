import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex relative flex-col text-center md:text-left
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center"
    >
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl items-center justify-center"
      >
        Skills
      </motion.h3>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-20 uppercase tracking-[3px] text-gray-500 text-sm"
      >
        Hover over a skill for currency proficiency
      </motion.h3>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-5 gap-7"
      >
        <Skill percentage={70} imageSrc="javascript.jpeg" />
        <Skill percentage={75} imageSrc=" html5.jpeg"/>
        <Skill percentage={65} imageSrc="css3.jpeg" />
        <Skill percentage={70} imageSrc="typescript.jpeg" />
        <Skill percentage={65} imageSrc="tailwind.jpeg" />
        <Skill percentage={60} imageSrc="nodejs.jpeg" />
        <Skill percentage={50} imageSrc="mongodb.jpeg" />
        <Skill percentage={60} imageSrc="cpp.jpeg" />
        <Skill percentage={60} imageSrc="mui.jpeg" />
        <Skill percentage={70} imageSrc="react.jpeg" />
        <Skill percentage={75} imageSrc=" python.jpeg" />
        <Skill percentage={40} imageSrc="java.jpeg" />
        <Skill percentage={40} imageSrc="docker.jpeg" />
        <Skill percentage={50} imageSrc="mysql.jpeg" />
        <Skill percentage={50} imageSrc="django.jpeg" />
      </motion.div>
    </motion.div>
  );
}

export default Skills;
