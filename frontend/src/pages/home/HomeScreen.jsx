import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";

const HomeScreen = () => {
  return (
    <div className='relative h-screen text-white'>
      <Navbar />

      <img 
        src="/extraction.jpg" 
        alt="Imagem Hero"
        className='absolute top-0 left-0 w-full h-full object-cover z-0' 
      />

      <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 z-20'>
          
          <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 z-10'/>

          <div className='max-w-2xl z-30'>
            <h1 className='mt-4 text-6xl font-extrabold text-balance'>Resgate</h1>
            <p className='mt-2 text-lg'>2020 | 16+</p>
            <p className='mt-4 text-lg'>
              Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante uma missão para resgatar o filho de um chefão do crime.
            </p>
          </div>

          <div className='flex mt-8 z-30'>
            <Link to="/watch/123"
              className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center transition-colors duration-300'>
              <Play className='size-6 inline-block mr-2'/>
              Play  
            </Link>
            <Link to="/watch/123"
              className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center transition-colors duration-300'>
              <Info className='size-6 inline-block mr-2'/>
              Saiba mais  
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;
