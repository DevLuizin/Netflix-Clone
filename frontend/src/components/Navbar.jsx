import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>

        <div className='flex items-center gap-10 z-50'>
            <Link to={"/"}>
                <img src='/netflix-logo.png' alt='Logo Netflix' className='w-32 sm:w-40' />
            </Link>

            { /* Desktop navbar items */}
            <div className='hidden sm:flex gap-2 items-center'>
                <Link to={"/"} className='hover:underline'>
                    Filmes
                </Link>
                <Link to={"/"} className='hover:underline'>
                    Séries
                </Link>
                <Link to={"/history"} className='hover:underline'>
                    Histórico de Pesquisa
                </Link>
            </div>
        </div>

    </header>
  )
}

export default Navbar