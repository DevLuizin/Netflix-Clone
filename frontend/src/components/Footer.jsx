import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
        <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
            <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Criado por{" "}
                <a href="https://github.com/DevLuizin"
                target='_blank'
                className='font-medium underline underline-offset-4 hover:text-red-600'>
                    Luizin
                </a>
                . O código fonte está disponível em{" "}
                <a href="https://github.com/DevLuizin/Netflix-Clone"
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4 hover:text-red-600'>
                    Github
                </a>
                .
            </p>
        </div>
    </footer>
  )
}

export default Footer