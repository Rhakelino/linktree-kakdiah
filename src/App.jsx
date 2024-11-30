import { useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function App() {

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-tr from-[#e8cfb5] via-[#EFEAE5] to-[#e8cfb5]">
      <div className="max-w-sm flex flex-col justify-center items-center gap-5 my-0 sm:my-14">
        <img src="./images/1.webp" className='w-24 rounded-full' alt="Profile" />
        <h1 className='text-center font-bold text-xl'>_santap.in</h1>
        <a href="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.29350-15/298010661_591336152446722_8659560940887455266_n.webp?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Br9hfowYjQIQ7kNvgEHIhkX&_nc_gid=6bd57efdc57b4b6fb2f36421b5b418a2&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MjkwMDA5ODAzMTI3ODE5OTU1OA%3D%3D.3-ccb7-5&oh=00_AYCicAmqFBGtDOIMeEYxAi5oAvQOfk3PjhFSvOxJEuuWSw&oe=674FB386&_nc_sid=5a0a6d"  className='transition hover:scale-105'
        target='_blank'
        >
          <div className="flex w-80 sm:w-[600px] h-14 mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
            <img src="./images/1.webp" className='w-12 rounded-md' alt="Thumbnail" />
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Menu Santapin</h1>
            </div>
          </div>
        </a>
        
        <a href="" className='transition hover:scale-105 '>
          <div className="flex w-80 sm:w-[600px] h-14  mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
       <IoLogoWhatsapp className='text-3xl ml-2 text-green-500'/>   
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Order By Whatsapp</h1>
            </div>
          </div>
        </a>
        <a href="" className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14  mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 
          rounded-sm">
            <FaMapMarkerAlt className='text-3xl ml-2 text-red-500'/>
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Address</h1>
            </div>
          </div>
        </a>
        <a href="" className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14  mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
            <FaTiktok className='text-3xl ml-2'/>
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Tiktok</h1>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/_santap.in?igsh=ZzFhY3g5dzI4eTgy" target='_blank' className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14 mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
          <svg className='ml-2' enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="fi_2111463"><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5"></stop><stop offset=".5" stop-color="#ff543e"></stop><stop offset="1" stop-color="#c837ab"></stop></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"></path><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"></path></svg>
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Instagram</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
