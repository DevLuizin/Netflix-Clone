import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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

            { /* Mobile navbar items */}
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link to={"/"}
                    className='block hover:underline p-2'
                    onClick={toggleMobileMenu}>
                        Filmes
                    </Link>
                    <Link to={"/"}
                    className='block hover:underline p-2'
                    onClick={toggleMobileMenu}>
                        Séries
                    </Link>
                    <Link to={"/history"}
                    className='block hover:underline p-2'
                    onClick={toggleMobileMenu}>
                        Histórico de Pesquisa
                    </Link>
                    
                </div>
            )}

        </header>
    )
}

export default Navbar