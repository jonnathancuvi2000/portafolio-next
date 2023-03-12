import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen px-[50px] flex items-center py-16 pt-24'> 
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xt tracking-widest text-[#5651e5]'>Acerca</p>
                    <h2 className='py-4'>Quien soy</h2>
                    <p className='py-2 text-gray-600'>// Jonnathan Cuvi - Ingeniero en Sitemas - Desarrollador de Software</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis eligendi, eum odit pariatur minima doloremque incidunt architecto unde, quod facilis enim tenetur provident, sint repellat deleniti! Modi, possimus nobis!</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum aliquid facere labore non veniam perferendis, beatae, blanditiis autem officia omnis incidunt cum consequatur animi quae rem odio nesciunt temporibus!</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Revisa algunos de mis proyectos</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About
