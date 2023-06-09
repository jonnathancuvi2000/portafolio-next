import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Stage } from '@react-three/drei'

import Pc from './Pc'
import Mac from './Mac'
import PcModel from './PcModel'
const Main = () => {
    return (
        <div id='home' className='relative w-full h-screen text-center '>
            <div className='max-w-[1240px] w-full h-full m-auto flex justify-center items-center pt-20 '>
                <div className='z-10'>
                    <h1 className='py-4 text-gray-700'>Hola, Soy <span className='text-[#5651e5]'>Jonnathan</span></h1>
                    <h1 className='py-2 text-gray-700'>
                        Ingeniero en Sistemas - Desarrolador de Software
                        {/* Ingeniero en Sistemas */}
                    </h1>

                    
                    <div className=' w-[300px] h-[200px] m-auto  flex items-center justify-center hover:scale-105 ease-in duration-300'>
                        <Canvas >
                            <Stage environment="city" intensity={0.6}>
                                <PcModel />
                            </Stage>
                            <OrbitControls enableZoom={false} autoRotate />
                        </Canvas>
                    </div>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div> */}
                        <Link href={'https://github.com/jonnathancuvi2000?tab=repositories'} rel="noopener noreferrer" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div> */}
                    </div>
                </div>
                {/* <div>
                <Canvas className='bg-white m-0.5 rounded-xl'>
                        <Stage environment="city" intensity={0.6}>
                            <PcModel />
                        </Stage>
                        <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                </div> */}
                {/* <div className='absolute  w-full h-full mx-auto top-[50px]'>
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
                </div> */}

            </div>

        </div>
    )
}

export default Main
