import React, { useRef, useState } from 'react'
import ContactImg from '../public/assets/contact.jpg';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [message, setMesssage] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_9of9g2m', 'template_s264y0r', ref.current, 'XS8a7qWd1mbZ263c2')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setMesssage('Su mensaje fue enviado correctamente.');
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
        setMesssage('Hubo un error, su mensaje no fue enviado.')
      });
  }
  const handleChange = () =>  {
    setMesssage('')
  }

  return (
    // pt-10 this was not before
    <div id='contact' className='w-full lg:h-screen pt-10'>
      <div className='max-w-[1240px] m-auto px-[50px] py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contactar</p>
        <h2 className='py-4'>Ponerce en Contacto</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full rounded-xl'>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Jonnathan Cuvi</h2>
                <p>Ingeniero en Sistemas</p>
                <p className='py-4'>Disponible a tiempo completo. Contactame para mas informacion.</p>

              </div>
              <div>
                {/* pt-2 it was pt-8 before
              p-3 it was p-6 before  */}
                <p className='uppercase pt-2'>Contactame</p>
                <p className='py-2'>Correo: jonnathancuvi@gmail.com</p>
                <p className='pb-2'>Celular: 0968500339</p>
                <div className='flex items-center justify-between py-4'>
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='py-4'>

              <form ref={ref} onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Nombre</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' required onChange={handleChange} />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' required onChange={handleChange}/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensaje</label>
                  <textarea className='border-2 rounded-xl p-3 border-gray-300' rows='6' name='message' required onChange={handleChange}></textarea>
                </div>
                {success ? message : message}
                <button type='submit' className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-4 text-gray-100 mt-4'>Enviar Mensaje</button>
              </form>

            </div>
          </div>
        </div>
        {/* scroll to top */}
        <div className='flex justify-center pt-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact

