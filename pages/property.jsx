import React from 'react'
import Image from 'next/image';
import propertyImg from '../public/assets/projects/property.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Property = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <div className='w-full'>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      {/* before it was this "bg-black/80" I changed to bg-black/60 */}
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={data.img ? '/../public/assets/projects/' + data.img : propertyImg} alt='/' />
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

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Proyecto</p>
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
