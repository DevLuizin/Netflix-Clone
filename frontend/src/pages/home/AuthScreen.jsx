import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email="+email);
  };

  return (
    <div className='hero-bg relative'>

        {/* Navbar */}
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
            <img src="/netflix-logo.png" alt="logo" className='w-32 md:w-52' />
            <Link to="/login" className='text-white bg-red-600 py-1 px-2 rounded hover:bg-red-700'>
                Entrar
            </Link>
        </header>

        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Filmes, séries e muito mais, sem limites</h1>
            <p className='text-lg mb-4'>A partir de R$ 20,90. Cancele quando quiser.</p>
            <p className='mb-4'>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura</p>
            
            <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
                <input type="email"
                placeholder='Digite seu email...' 
                className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center hover:bg-red-700'>
                    Vamos lá
                    <ChevronRight className='size-8 md:size-10'/>
                </button>
            </form>
        </div>

        {/* separator */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        { /* 1st section */ }
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* left ride */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Aproveite na sua TV</h2>
                    <p className='text-lg md:text-xl'>
                        Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Leitores de Blu-ray, e mais. 
                    </p>
                </div>
                {/* right ride */}
                <div className='flex-1 relative'>
                    <img src="/tv.png" alt="Tv" className='mt-4 z-20 relative' />
                    <video className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-0'
                    playsInline
                    autoPlay={true}
                    muted
                    loop>
                        <source src='/hero-vid.m4v' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>

        {/* separator */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        {/* 2nd section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
                {/* left side */}
                <div className='flex-1'>
                    <div className='relative'>
                        <img src="/stranger-things-lg.png" alt="Stranger Things Image"
                        className='mt-4' />
                        <div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'>
                            <img src="/stranger-things-sm.png" alt="image" className='h-full' />
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col gap-0'>
                                    <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                                    <span className='text-sm text-blue-500'>Dowloading...</span>
                                </div>

                                <img src="/download-icon.gif" alt="icon dowload" className='h-12' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>Baixe seus conteúdos para assistir offline</h2>
                    <p className='text-lg md:text-xl'>Salve seus programas favoritos e sempre tenha algo para assistir</p>
                </div>
            </div>
        </div>

        {/* separator */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        { /* 3rd section */ }
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* left ride */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Assista em qualquer lugar</h2>
                    <p className='text-lg md:text-xl'>
                    Transmita filmes e programas de TV ilimitados no seu telefone, tablet, laptop e TV.
                    </p>
                </div>

                {/* right ride */}
                <div className='flex-1 relative overflow-hidden'>
                    <img src="/device-pile.png" alt="Device image" className='mt-4 z-20 relative' />
                    <video className='absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]'
                    playsInline
                    autoPlay={true}
                    muted
                    loop>
                        <source src='/video-devices.m4v' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>

        {/* separator */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        {/* 4th section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row px-4 md:px-2'>
                {/* left */}
                <div className='flex-1 relative'>
                    <img src="/kids.png" alt="Aproveite na sua TV" className='mt-4' />
                </div>
                {/* right */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Crie perfis para as crianças</h2>
                    <p className='text-lg md:text-xl'>
                        Coloque as crianças em aventuras com seus personagens favoritos em um espaço feito especialmente para elas - grátis com sua assinatura
                    </p>
                </div>
            </div>
        </div>

        {/* separator */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

    </div>
  );
};

export default AuthScreen;
