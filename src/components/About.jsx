import React from 'react'
import { aboutMeContent } from '../Resource'
import { FaCheck, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
export const About = () => {
    return (
        <div className='w-full flex justify-between  px-10 flex-col border-t border-neutral-600 '>
            <motion.h3
                whileInView={{ opacity: 1, y: 1 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='text-neutral-200 w-full text-center my-10 text-2xl'> About me</motion.h3>
            <div className='flex justify-start items-center sm:justify-between w-full flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='w-full flex justify-center mb-10 sm:w-2/5 sm:justify-end h-80 flex-wrap'>
                    <img src="/c2.jpg" alt="" className=' w-full sm:w-3/4  h-full object-cover rounded-2xl object-top ' />
                </motion.div>
                <motion.div className='w-full sm:w-1/2 text-left pr-3'>
                    <h2 className='text-neutral-200 text-center text-xl'>My Story</h2>
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 1, ease: 'easeInOut' }} className='text-neutral-500 text-sm  w-full'>{aboutMeContent.background}</motion.h3>
                    <h2 className='text-neutral-200 text-center text-xl'>Soft Skills</h2>
                    <div>
                        {aboutMeContent.skills.soft.map((skill, index) => (
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -30 }}
                                transition={{ duration: 1, ease: 'easeInOut' }} key={index} className="flex items-center mb-2">
                                <FaCheckCircle className="text-green-400 mr-2" />
                                <div className='text-neutral-300'>{skill}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


            </div>
        </div>
    )
}
