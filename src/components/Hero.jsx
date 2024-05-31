import React from 'react';
import { homePageContent } from '../Resource';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <motion.div
            className='flex mb-20 flex-wrap justify-between sm:justify-center w-full px-10 py-10 border-neutral-600 '
            initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
            transition={{ duration: 0.5 }} // Animation duration and easing
        >
            <motion.div
                className='text-neutral-200 w-full sm:w-2/4 mb-7'
                initial={{ opacity: 0, x: 100 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
                transition={{ duration: 0.8 }} // Animation duration and easing
            >
                <span className='text-6xl font-inter font-thin tracking-tighter '>{homePageContent.header.name}</span>
                <h1 className=" text-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 font-bold font-inter bg-clip-text text-transparent my-5">
                    {homePageContent.header.title}
                </h1>
                <p className='w-full'>
                    {homePageContent.introduction}
                </p>
            </motion.div>
            <motion.div
                className='w-full flex justify-start sm:w-2/5 sm:justify-end h-80 '
                initial={{ opacity: 0, x: -100 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
                transition={{ duration: 1 }} // Animation duration and easing
            >
                <img src="/profile.jpg" alt="" className='w-full sm:w-3/4  h-full object-cover rounded-2xl object-top ' />
            </motion.div>
        </motion.div>
    );
};
