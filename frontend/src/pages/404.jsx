import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white background404'>
        <header className='absolute top-0 left-0 p-4 bg-black w-full'>
            <Link to={"/"}>
                <img src="/netflix-logo.png" alt="Netflix" className='h-8' />
            </Link>
        </header>

        <main className='text-center error-page--content z-10'>
            <h1 className='text-7xl font-semibold mb-4'>Acabou se perdendo?</h1>
            <p className='mb-6 text-xl'>Desculpe, não conseguimos encontrar essa página. Você encontra muito mais na página inicial.</p>
            <Link to={"/"} className='bg-white text-black py-2 px-4 rounded'>Netflix Home</Link>
        </main>
    </div>
  )
}

export default NotFoundPage
