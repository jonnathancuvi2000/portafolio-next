import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion'
import AboutImg from '../public/assets/about.jpg';
import Image from 'next/image';

import { textVariant } from '../public/utils/motion'
import { FaSchool, FaUniversity, MdSchool } from 'react-icons/fa'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Pc from './Pc'
import Mac from './Mac'
import PcModel from './PcModel'


// https://www.youtube.com/watch?v=0fYi8SGA20k&t=2869s
// 1:23

const StudieCard = ({ study }) => {
  <VerticalTimelineElement
    contentStyle
  >

  </VerticalTimelineElement>
}

function Studies() {
  return (

    <div id='studies' className='w-full md:h-screen text-center py-16 pt-24'>
      {/* w-full md:h-screen px-[50px] py-16 pt-24 */}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3'>
      
        <div className=' w-full h-screen  m-auto '>
            <Canvas>
              <Stage environment="city" intensity={0.6}>
                <Mac />
              </Stage>
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        
        </div>

        <div className=' col-span-2'>
          <p className="uppercase text-xt tracking-widest text-[#5651e5]">Estudios</p>
          <h2 className='py-4'>Donde y que Estudie</h2>

          <div className='flex flex-col'>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderBotton: '7px solid  red' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date="1998 - 2005"
                iconStyle={{ background: '#5651e5', color: '#fff' }}
                icon={
                  <div className='flex justify-center align-bottom w-full h-full'>
                    <div>
                      <FaSchool />
                    </div>
                    {/* <Image src={AboutImg} className='w-[60%] h-[60%] object-contain' /> */}
                  </div>
                }
              >
                <div className="vertical-timeline-element-content-box">
                  <h3 className='text-gray-600'>Escuela</h3>
                  <p className='text-gray-500' >Mario Rizzini</p>
                </div>
              </VerticalTimelineElement>



              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date="2005 - 2011"
                iconStyle={{ background: '#5651e5', color: '#fff' }}
                icon={
                  <div className='flex justify-center align-bottom w-full h-full'>
                    <div>
                      <FaSchool />
                    </div>
                    {/* <Image src={AboutImg} className='w-[60%] h-[60%] object-contain' /> */}
                  </div>
                }
              >
                <div>
                  <h3 className='text-gray-600'>Colegio.</h3>
                  <p className='text-gray-500'>Octavio Cordero Palacios, Bachillerato en FIsico Matematico.</p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date="1998 - 2005"
                iconStyle={{ background: '#5651e5', color: '#fff' }}
                icon={
                  <div className='flex justify-center align-bottom w-full h-full'>
                    <div>
                      <FaUniversity />
                    </div>
                    {/* <Image src={AboutImg} className='w-[60%] h-[60%] object-contain' /> */}
                  </div>
                }
              >
                <div>
                  <h3 className='text-gray-600'>Universidad</h3>
                  <p className='text-gray-500' >Universidad de Cuenca, Ingenieria en Sietmas</p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Studies


// <VerticalTimeline>
// <VerticalTimelineElement
//   className="vertical-timeline-element--work"
//   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//   contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//   date="2011 - present"
//   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
// // icon={<WorkIcon />}
// >
//   <h3 className="vertical-timeline-element-title">Creative Director</h3>
//   <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//   <p>
//     Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//   </p>
// </VerticalTimelineElement>

// <VerticalTimelineElement
//   className="vertical-timeline-element--work"
//   date="2010 - 2011"
//   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
// // icon={<WorkIcon />}
// >
//   <h3 className="vertical-timeline-element-title">Art Director</h3>
//   <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//   <p>
//     Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//   </p>
// </VerticalTimelineElement>




// <VerticalTimelineElement
//   iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
// // icon={<StarIcon />}
// />
// </VerticalTimeline>