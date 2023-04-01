// import React from 'react'
import React, { useRef, useState } from 'react';
import ProjectItem from './ProjectItem'


import ecommerceWeb from '../public/assets/projects/eccomerceweb.png'
import ima from '../public/assets/projects/eccomerceweb.png'
import Script from "next/script";
import Card from '../components/Card'

import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { data } from '../public/data'



// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);



function Proyectos() {
    const [numData, setNumData] = useState(data.length);

    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(numData);
    const prependNumber = useRef(1);
    // Create array with numData slides
    const [slides, setSlides] = useState(
        Array.from({ length: numData }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <div id='projects' className='w-full pt-[25px]'>
            {/* before  it was py-16 in the next div */}
            <div className='max-w-[1240px] mx-auto px-[50px] pt-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
                <h2>Lo que he desarrollado</h2>

                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    // centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    // virtual
                >
                    {data.map((dato, index) => (
                        <SwiperSlide key={dato} virtualIndex={index}>
                            {/* <ProjectItem key={dato.id} title={dato.title} projectType={dato.projectType} backgroundImg={dato.image} projectUrl={dato.projectUrl} pageData={dato.feachurePage} /> */}
                            <Card key={dato.id} title={dato.title} projectType={dato.projectType} backgroundImg={dato.image} projectUrl={dato.projectUrl} pageData={dato.feachurePage} />
                        </SwiperSlide>
                    ))}
                </Swiper>



                {/* slide code -> https://gist.github.com/Dromediansk/aaf9b6598524b3892e5d2ffed0f7f03c */}
                {/* <div className="containers-cards relative pt-5">

                    <div className="slide-container swiper">
                        <div className="slide-content">
                            <div class="card-wrapper swiper-wrapper">
                                <div className="card ">
                                    <div className="image-content">
                                        <span className="overlay"></span>

                                        <div className="card-image">
                                            <img src={ima} alt="" className="card-img" />
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h2 className='name'>Jonnatha</h2>
                                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                                        <button className='button-card'>Mas Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-scrollbar"></div>
                        <div class="swiper-pagination"></div>
                    </div>

                </div> */}


            </div>

        </div>
    )
}

export default Proyectos