import React from 'react'

import ProjectItem from './ProjectItem'
import propertyImg from '../public/assets/projects/property.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === datos.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? datos.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const datos = [
    {
      id: '1',
      title: "Propiedades",
      projectType: "React JS",
      image: propertyImg,
      projectUrl: '/property'
    },
    {
      id: '2',
      title: "Propiedades",
      projectType: "Angular JS",
      image: netflixImg,
      projectUrl: '/property'
    },
    {
      id: '3',
      title: "Propiedades",
      projectType: "Next JS",
      image: cryptoImg,
      projectUrl: '/property'
    },
    {
      id: '4',
      title: "Propiedades",
      projectType: "React JS",
      image: twitchImg,
      projectUrl: '/property'
    },
  ]


  return (
    <div id='projects' className='w-full pt-[25px]'>
      {/* before  it was py-16 in the next div */}
      <div className='max-w-[1240px] mx-auto px-[50px] pt-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
        <h2>Lo que he desarrollado</h2>

        {/* slide code -> https://gist.github.com/Dromediansk/aaf9b6598524b3892e5d2ffed0f7f03c */}
        <div className="relative pt-5">
          <AiOutlineLeft
            onClick={handlePrevSlide}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
          />
          <div className="w-full h-[60vh] flex  relative m-auto">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative z-10 w-full h-full"
            >
              {datos.map((dato, index) => {
                if (index === currentSlide) {
                  return (
                    <ProjectItem key={dato.id} title={dato.title} projectType={dato.projectType} backgroundImg={dato.image} projectUrl={dato.projectUrl} />
                  );
                }
              })}
            </Swipe>
          </div>
          <AiOutlineRight
            onClick={handleNextSlide}
            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
          />

          <div className="relative flex justify-center p-2 pt-5">
            {datos.map((_, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-4 w-4 bg-[#5651e5] rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-4 w-4 bg-[#709dff] rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem title='Propiedades' projectType='React JS' backgroundImg={propertyImg} projectUrl='/property' />
          <ProjectItem title='Propiedades' projectType='Angular JS' backgroundImg={cryptoImg} projectUrl='/property' />
          <ProjectItem title='Propiedades' projectType='Next JS' backgroundImg={netflixImg} projectUrl='/property' />
          <ProjectItem title='Propiedades' projectType='Spring JS' backgroundImg={twitchImg} projectUrl='/property' />

        </div> */}
      </div>
    </div>
  )
}

export default Projects
