import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
  image: string;
  skills: string[];
};

function ExperienceCard({
  company,
  jobTitle,
  startDate,
  endDate,
  description,
  image,
  skills,
}: Props) {
  return (
    <article className=" flex flex-col round-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#5C9EAD]/5 p-10 cursor-pointer hover:bg-[#5C9EAD]/10  transition-opacity duration-100 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded full nd:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src={image}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{company}</h4>
        <p className="font-bold text-2xl mt-1">{jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {skills.map((skill) => (
            <img
              key={skill}
              className="h-10 w-10 "
              src={skill}
              alt=""
            />
          ))}
        </div>
        <p className='text-gray-400'>
          Started work: {startDate} - to: {endDate}
        </p>
        <ul className="list-disc space-y-0 ml-5 max-h-40 text-lg overflow-y-scroll pr-5 scrollbar-thin
                         scrollbar-track-[#EEEEEE]/20 scrollbar-thumb-[#5C9EAD]/60 text-gray-500">
          {description.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
