import React, { useEffect } from 'react'
import Image from 'next/image';
import CardSkills from './CardSkills'
// images
import JavaImg from '../public/assets/skills/java.png';
import PythonImg from '../public/assets/skills/python.png';
import CImg from '../public/assets/skills/c.png';
import CsharpImg from '../public/assets/skills/csharp.png';

import ReactImg from '../public/assets/skills/react.png';
import VueImg from '../public/assets/skills/vue1.png';
import NextJsImg from '../public/assets/skills/nextjs.png';
import AngularImg from '../public/assets/skills/angular.png';
import HtmlImg from '../public/assets/skills/html.png';
import CssImg from '../public/assets/skills/css.png';
import JSImg from '../public/assets/skills/javascript.png';
import PPHImg from '../public/assets/skills/php.png';

import NodeImg from '../public/assets/skills/node.png';
import SpringImg from '../public/assets/skills/spring.png';
import LaravelImg from '../public/assets/skills/laravel1.jpg';
import NetImg from '../public/assets/skills/net.png';

import MysqlImg from '../public/assets/skills/mysql.png';
import OracleImg from '../public/assets/skills/oracle2.png';
import PostgresqlImg from '../public/assets/skills/postgres.png';
import CasandraImg from '../public/assets/skills/casandra.png';
import FirebaseImg from '../public/assets/skills/firebase.png';
import MongoImg from '../public/assets/skills/mongo.png';

import FlutterImg from '../public/assets/skills/flutter1.png';
import ReactNativeImg from '../public/assets/skills/rn1.png';



const Skills = () => {

  useEffect(() => {
    let tabs = document.querySelectorAll(".tab")
    let indicator = document.querySelector(".indicator")
    let panels = document.querySelectorAll(".tab-panel")

    indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
    indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls")

        indicator.style.width = tab.getBoundingClientRect().width + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


        panels.forEach(panel => {
          let panelId = panel.getAttribute("id")
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0")
            panel.classList.add("visible", "opacity-100")
          } else {
            panel.classList.add("invisible", "opacity-0")
          }
        })
      })
    })
  }, [])

  return (
    // I added the pb-14 before it was not there
    <div id='skills' className='w-full lg:h-screen p-2 px-[50px] pb-14'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xt tracking-widest text-[#5651e5]'>Havilidades</p>
        <h2 className='py-4'>Que puedo hacer</h2>
        <div
          role="tablist"
          aria-label="tabs"
          class="relative w-full max-md:overflow-hidden mx-auto h-12 grid grid-cols-5 items-center px-[3px] rounded-full shadow-2xl shadow-900/20 transition font-normal"
        >
          {/* shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white */}
          {/* bg-white INSTEAD OF  from-[#5651e5] to-[#709dff] */}
          <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full shadow-xl shadow-gray-400 uppercase bg-white bg-gradient-to-r  text-white"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class="relative block h-10 px-3 tab rounded-full"
          >
            <span class="text-gray-800">Lenguajes de Programacion</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full"
          >
            <span class="text-gray-800">Desarrollo Web - FrontEnd</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full"
          >
            <span class="text-gray-800">BackEnd</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-4"
            id="tab-4"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full"
          >
            <span class="text-gray-800">Bases de Datos</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-5"
            id="tab-5"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full"
          >
            <span class="text-gray-800">Mobile y Otros</span>
          </button>
        </div>
        {/* max-sm:overflow-auto md:overflow-auto lg:h-full this was not before, it just was "relative" but I removed it at last, so I just add "relaive"*/}
        <div class="relative">
          <div
            role="tabpanel"
            id="panel-1"
            class="tab-panel  py-6 transition duration-300 w-ful"
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
              <CardSkills url={JavaImg} name={'Java'} />
              <CardSkills url={PythonImg} name={'Python'} />
              <CardSkills url={CImg} name={'C'} />
              <CardSkills url={CsharpImg} name={'C#'} />
            </div>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            class="absolute top-0 invisible opacity-0 tab-panel  py-6 transition duration-300 w-full"
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <CardSkills url={ReactImg} name={'React'} />
              <CardSkills url={VueImg} name={'Vue'} />
              <CardSkills url={NextJsImg} name={'NextJS'} />
              <CardSkills url={AngularImg} name={'Angular'} />
              <CardSkills url={HtmlImg} name={'HTML'} />
              <CardSkills url={CssImg} name={'CSS'} />
              <CardSkills url={JSImg} name={'JavaScript'} />
              <CardSkills url={PPHImg} name={'PHP'} />
            </div>
            <p></p>
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            class="absolute top-0 invisible opacity-0 tab-panel  py-6 transition duration-300 w-full"
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <CardSkills url={NodeImg} name={'Node'} />
              <CardSkills url={SpringImg} name={'Spring Boot'} />
              <CardSkills url={LaravelImg} name={'Laravel'} />
              <CardSkills url={NetImg} name={'Asp .Net Core'} />
            </div>
          </div>

          <div
            role="tabpanel"
            id="panel-4"
            class="absolute top-0 invisible opacity-0 tab-panel  py-6 transition duration-300 w-full"
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <CardSkills url={MysqlImg} name={'MySql'} />
              <CardSkills url={OracleImg} name={'Oracle'} />
              <CardSkills url={PostgresqlImg} name={'PostgreSQL'} />
              <CardSkills url={CasandraImg} name={'Casandra'} />
              <CardSkills url={FirebaseImg} name={'Firebase'} />
              <CardSkills url={MongoImg} name={'MongoDB'} />
            </div>
          </div>

          <div
            role="tabpanel"
            id="panel-5"
            class="absolute top-0 invisible opacity-0 tab-panel  py-6 transition duration-300 w-full"
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <CardSkills url={FlutterImg} name={'Flutter'} />
              <CardSkills url={ReactNativeImg} name={'React Native'} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills

