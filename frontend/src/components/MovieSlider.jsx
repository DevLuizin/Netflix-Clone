import React, { useEffect, useRef, useState } from 'react'
import { useContentStore } from '../store/content'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SMALL_IMG_BASE_URL } from '../utils/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieSlider = ({ category }) => {
    const { contentType } = useContentStore();
    const [content, setContent] = useState([]);
    const [showArrows, setShowArrows] = useState(false);

    const sliderRef = useRef(null);

    const formattedContentType = contentType === "movie" ? "Filmes" : "Séries";

    const categoryLabels = {
        now_playing: "Em Cartaz",
        popular: "Populares",
        top_rated: contentType === "movie" ? "Mais bem Avaliados" : "Mais bem Avaliadas",
        upcoming: "Lançados Em Breve",
        airing_today: "Estreando Hoje",
        on_the_air: "No Ar",
    };

    const formattedCategory = categoryLabels[category] || category;

    useEffect(() => {
        const getContent = async () => {
            const res = await axios.get(`/api/v1/${contentType}/${category}`);
            setContent(res.data.content);
        }

        getContent();
    }, [contentType, category]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({left: -sliderRef.current.offsetWidth, behavior: 'smooth'});
        }
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({left: sliderRef.current.offsetWidth, behavior: 'smooth'});
    };

    return (
        <div className='bg-black text-white relative px-5 md:px-20'
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}>
        <h2 className='mb-4 text-2xl font-bold'>
            {formattedContentType} {formattedCategory}
        </h2>

        <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
                {content.map((item) => (
                    <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                        <div className='rounded-lg overflow-hidden'>
                            <img 
                            src={SMALL_IMG_BASE_URL + item.backdrop_path}
                            alt='Imagem do Filme ou Série'
                            className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                            />
                        </div>
                        <p className='mt-2 text-center'>{item.name || item.title}</p>
                    </Link>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
                        onClick={scrollLeft}
                    >
                        <ChevronLeft size={24}/>
                    </button>

                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'    
                        onClick={scrollRight}
                    >
                        <ChevronRight size={24}/>
                    </button>
                </>
            )}
        </div>
    );
}

export default MovieSlider
