import React from 'react'
import ima from '../public/assets/projects/eccomerceweb.png'

import Image from 'next/image';
// import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link';
const Card = ({ title, projectType, backgroundImg, projectUrl, pageData }) => {
  
    return (
        <div className="card shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                    {/* <img src={ima} alt="" className="card-img" /> */}
                    <Image className="card-img" src={backgroundImg} alt='/'  />

                </div>
            </div>

            <div className="card-content">
                <h2 className='name'>{title}</h2>
                <p className="description">{projectType}</p>

                <Link href={{ pathname: projectUrl, query: pageData }}>
                    <p className='button-card'>Mas Info</p>
                </Link>

                {/* <button className='button-card'>Mas Info</button> */}
            </div>
        </div>
    )
}

export default Card
