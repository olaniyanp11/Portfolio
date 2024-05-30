import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex justify-between font-roboto px-10 py-10'>
            <div className='text-neutral-200 text-2xl flex-shrink'> PermacTech</div>
            <ul className=' gap-5 hidden sm:flex'>
                <FaGithub className='text-neutral-200 hover:text-purple-500 text-lg' />
                <FaLinkedin className='text-neutral-200 text-lg hover:text-purple-500' />
                <FaTwitter className='text-neutral-200 text-lg hover:text-purple-500' />
            </ul>
            
                <ul className={`gap-5 absolute right-10 mt-20 flex flex-col bg-transparent backdrop-blur-10 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <FaGithub className='text-neutral-200 text-lg hover:text-purple-500' />
                    <FaLinkedin className='text-neutral-200 text-lg hover:text-purple-500' />
                    <FaTwitter className='text-neutral-200 text-lg hover:text-purple-500' />
                </ul>
                <AiOutlineMenuUnfold className={`text-neutral-200 text-lg flex sm:hidden ${isOpen ? 'hidden' : 'block'}`} onClick={toggleMenu} />
                <AiOutlineClose className={`text-neutral-200 text-lg flex sm:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu} />

        </nav>
    );
};
