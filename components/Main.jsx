import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {  AiOutlineMail } from 'react-icons/ai'


const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                    <p className='mt-[100px] uppercase text-sm tracking-widest text-gray-600'>Contruyamos algo</p>
                    <h1 className='py-4 text-gray-700'>Hola, Soy <span className='text-[#5651e5]'>Jonnathan</span></h1>
                    <h1 className='py-2 text-gray-700'>
                        Ingeniero en Sistemas - Desarrolador de Software
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores natus laboriosam consequatur, neque necessitatibus voluptatum itaque illum iste, esse repellendus aut omnis quisquam fugit sed eveniet nemo obcaecati! Sapiente!
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
