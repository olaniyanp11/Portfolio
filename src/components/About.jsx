import React from 'react'
import { aboutMeContent } from '../Resource'
export const About = () => {
    return (
        <div className='w-full flex justify-between  px-10 flex-col '>
            <hr className='w-full ' />
            <h3 className='text-neutral-200 w-full mt-10 text-center my-10 text-2xl'> About me</h3>
            <div className='flex justify-start sm:justify-between w-full flex-wrap'>
                <div className='w-full flex justify-center mb-10 sm:w-2/5 sm:justify-end h-80 flex-wrap'>
                    <img src="/c2.jpg" alt="" className=' w-full sm:w-3/4  h-full object-cover rounded-2xl object-top ' />
                </div>
                <div className='w-full sm:w-1/2 text-left'>
                    <h2 className='text-neutral-200 text-center text-xl'>My Story</h2>
                    <h3 className='text-neutral-500 text-sm '>{aboutMeContent.background}</h3>
                </div>


            </div>
        </div>
    )
}
