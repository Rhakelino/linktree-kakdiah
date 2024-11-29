import { useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center min-h-screen items-center bg-[#EFEAE5]">
      <div className="max-w-sm flex flex-col justify-center items-center gap-5 my-0 sm:my-14">
        <img src="./images/1.webp" className='w-24 rounded-full' alt="Profile" />
        <h1 className='text-center font-bold text-xl'>@Brownies</h1>
        <a href="" className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14 mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
            <img src="./images/1.webp" className='w-12 rounded-md' alt="Thumbnail" />
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>PriceList PDF</h1>
            </div>
          </div>
        </a>
        <a href="" className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14  mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 rounded-sm">
            <IoLogoWhatsapp className='text-3xl ml-2'/>
            <div className="flex items-center justify-center w-full">
              <h1 className='mr-10 font-semibold'>Order By Whatsapp</h1>
            </div>
          </div>
        </a>
        <a href="" className='transition hover:scale-105'>
          <div className="flex w-80 sm:w-[600px] h-14  mx-4 shadow-md items-center bg-[#F9F5F5] px-2 py-2 
          rounded-sm">
            <FaMapMarkerAlt className='text-3xl ml-2'/>
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
            <FaSquareInstagram className='text-3xl ml-2'/>
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
