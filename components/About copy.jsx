import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Pc from './Pc'
import Mac from './Mac'
import PcModel from './PcModel'

const About = () => {
    return (
        // I add this just to test
        <div id='about' className='w-full md:h-screen px-[50px] flex items-center py-16 pt-24'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xt tracking-widest text-[#5651e5]'>Acerca</p>
                    <h2 className='py-4'>Quien soy</h2>
                    <p className='py-2 text-gray-600'>\\ Jonnathan Cuvi - Ingeniero en Sitemas</p>
                    <p className='py-2 text-gray-600'>Mi nombre completo es Jonnathan Darwin Cuvi Brito, nací y crecí en Cuenca, Ecuador. Soy una persona responsable, capaz de trabajar bien tanto en un entorno de equipo como con iniciativa propia, además me adapto fácilmente a los cambios.</p>
                    <p className='py-2 text-gray-600'>Soy tenas por lo que continuó haciendo algo hasta que esté completamente terminado. En mi tiempo libre usualmente me gusta aprender nuevas a cosas relacionadas con la Informática, por lo que me consideró una persona autodidacta.</p>
                    {/* <p className='py-2 text-gray-600'>Habilidad para trabajar en equipo y tenacidad para continuar haciendo algo hastaque esté completamente terminado.</p> */}
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Revisa algunos de mis proyectos</p>
                    </Link>
                </div>
                {/* <div className='w-full h-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Canvas className='bg-white m-0.5 rounded-xl'>
                        <Stage environment="city" intensity={0.6}>
                            <PcModel />
                        </Stage>
                        <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                </div> */}
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About
