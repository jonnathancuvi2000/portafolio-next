import React, { useState } from 'react'
import Image from 'next/image';
import propertyImg from '../public/assets/projects/property.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


import { datos } from '../public/data'


const Property = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === data.galery.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? data.galery.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };


  const router = useRouter();
  const data = router.query;
  console.log(data.galery)
  const url1 = `../public/assets/projects/${data.img}`;
  const url2 = `../public/assets/projects/eccomerceweb.png`;
  const [url3, seturl3] = useState(`../public/assets/projects/eccomerceweb.png`)
  // console.log(url3)


  return (
    <div className='w-full'>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        {/* before it was this "bg-black/80" I changed to bg-black/60 */}
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
        {/* {require(`./assets/images/dynamic/image-${imageId}.jpeg`)} */}
        {/* '/../public/assets/projects/' + data.img  */}
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={data.img ? `/../public/assets/projects/${data.img}` : propertyImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Propiedades</h2>
          <h3>
            {
              data.porperties?.map((property, index) => {
                return (
                  <span key={index}>{property} / </span>
                )
              })
            }
          </h3>
          {/* <h3>React JS/ Tailwind / Firebase</h3> */}
        </div>
      </div>

      {/* slide code -> https://gist.github.com/Dromediansk/aaf9b6598524b3892e5d2ffed0f7f03c */}
      {data.galery
        ?
        <div className="relative pt-5 max-w-[1240px] mx-auto p-2">
          <AiOutlineLeft
            onClick={handlePrevSlide}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 bg-slate-500 rounded-full"
          />
          <div className="w-full h-[60vh] flex  relative m-auto">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative z-10 w-full h-full duration-700 ease-in-out"
            >
              {data.galery?.map((dato, index) => {
                if (index === currentSlide) {
                  console.log('object')
                  return (
                    <Image
                      key={index}
                      src={require(`../public/assets/projects/${dato}`)}
                      layout="fill"
                      objectFit="contain"
                      className="duration-700 ease-in-out"
                    />
                  );
                }
              })}
            </Swipe>
          </div>
          <AiOutlineRight
            onClick={handleNextSlide}
            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 bg-slate-500 rounded-full"
          />

          <div className="relative flex justify-center p-2 pt-5">
            {data.galery?.map((_, index) => {
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
        : ''

      }

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          {/* <p>Proyecto</p> */}
          <h2>Descripcion General</h2>
          <p>{data.description}</p>
          {
            data.code
              ? <Link href={data.code} rel="noopener noreferrer" target="_blank"> <button className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-4 mr-8'>Codigo</button></Link>
              : ''
          }
          {
            data.demo
              ? <Link href={data.demo} rel="noopener noreferrer" target="_blank"><button className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-4 '>Demo</button> </Link>
              : ''
          }
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {
                data.tecnologies?.map((tecnology, index) => {
                  return (
                    <p key={index} className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> {tecnology}</p>
                  )
                })
              }
              {/* <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TailWild</p> */}
            </div>
          </div>
        </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Regresar</p>
        </Link>
      </div>

    </div>
  )
}

export default Property
