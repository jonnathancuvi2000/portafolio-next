import React from 'react'
import Image from 'next/image';
// import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link';

const ProjectItem = ({ title, projectType, backgroundImg, projectUrl }) => {
  return (
    // before it was "w-full" instead of "w-[500px]" and I added  "m-auto"
    <div className='relative flex items-center justify-center h-auto w-[500px] m-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute top-[35%] left-[40%] translate-x-[-44%] translate-y-[-%44]'>
        <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{projectType}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Mas Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
