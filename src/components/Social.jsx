import React from 'react'
import { FaJs, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
// Icons mapping


export const Social = () => {
  return (
    <div className='flex items-center mt-20 border-t border-neutral-600 pt-20  gap-10 sm:gap-0 flex-wrap w-full px-10 justify-between'>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 2.5, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaJs
          className='text-yellow-300 text-7xl border border-neutral-100 p-3 rounded-md' />
      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 3, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaNodeJs className='text-green-500 text-7xl border border-neutral-100 p-3 rounded-md' />

      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 2.6, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <SiExpress className='text-white text-7xl border border-neutral-100 p-3 rounded-md' />

      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 1.5, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaReact className='text-blue-500 text-7xl border border-neutral-100 p-3 rounded-md' />

      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 4, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <SiMongodb className='text-green-600 text-7xl border border-neutral-100 p-3 rounded-md' />

      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 4.5, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaHtml5 className='text-orange-600 text-7xl border border-neutral-100 p-3 rounded-md' />

      </motion.div>
      <motion.div className=''
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ delay: 1.5, duration: 2.5, ease: 'linear',  repeat: Infinity, repeatType: 'reverse' }}
      >
        <SiMysql className='text-blue-700 text-7xl border border-neutral-100 p-3 rounded-md' />
      </motion.div>
    </div>
  )
}
