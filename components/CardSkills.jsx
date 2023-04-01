import React from 'react'
import Image from 'next/image';


const CardSkills = ({ url, name }) => {
    return (
        <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className="img-cont">
                    <span className="overlay-skill"></span>
                    <div className='card-imag-skill m-auto'>
                        <Image className='img-skill' src={url} width='64' height='64' alt='' />
                    </div>
                </div>
                <div className='card-cont flex flex-col items-center justify-center'>
                    <h3 className='name-skill'>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardSkills
