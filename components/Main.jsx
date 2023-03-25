import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'


const Main = () => {
    return (
        <div id='home' className='relative w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div className='z-10'>
                    <p className='mt-[100px] uppercase text-sm tracking-widest text-gray-600'>Contruyamos algo</p>
                    <h1 className='py-4 text-gray-700'>Hola, Soy <span className='text-[#5651e5]'>Jonnathan</span></h1>
                    <h1 className='py-2 text-gray-700'>
                        Ingeniero en Sistemas - Desarrolador de Software
                        {/* Ingeniero en Sistemas */}
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Egresado de Ingeniería en Sistemas en la Universidad de Cuenca. Con experiencia en el desarrollo de aplicaciones web, tanto Front-End como Back-End. Además, poseo conocimientos en el desarrollo de aplicaciones móviles ya sea para IOS y Android. También cuento con experiencia en DataScience, Machine Learning.
                        {/* Mi nombre es Jonnathan Cuvi y soy egresado de la Universidad de Cuenca, poseo conocimientos en diferentes lenguajes de programación como Java, Python, C entre otros. Además, tengo experiencia desarrollando aplicaciones Web y Móviles en todas sus destrezas. También cuento con experiencia en DataScience, Machine Learning. */}
                        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores natus laboriosam consequatur, neque necessitatibus voluptatum itaque illum iste, esse repellendus aut omnis quisquam fugit sed eveniet nemo obcaecati! Sapiente! */}
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div> */}
                        <Link href={'https://github.com/jonnathancuvi2000?tab=repositories'} rel="noopener noreferrer" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div> */}
                    </div>
                </div>
                <div className='absolute  w-full h-full mx-auto top-[50px]'>
                    <Canvas >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.6}>
                            <MeshDistortMaterial
                                color="#FDFEFE" attach="material" distort={0.5} speed={2}
                            />
                        </Sphere>
                    </Canvas>
                </div>

            </div>

        </div>
    )
}

export default Main
