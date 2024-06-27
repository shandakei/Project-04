import React, { useState, useEffect } from 'react';
import './slideshow_default.css'

const Slideshow1 = () => {
    const slideshow1 = [
        '../../../public/media/1_breakfast.png',
        '../../../public/media/2_leaving.png',
        '../../../public/media/3_boarding.png',
        '../../../public/media/4_plane_window.png',
        '../../../public/media/5_anchor.png',
        '../../../public/media/6_crowd.png',
        '../../../public/media/7_chasing_people.png'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshow1.length);
        }, 4500);

        return () => clearInterval(interval); 
    }, [slideshow1.length]);

    return (
        <div>
            {/* <img src={slideshow1[currentSlide]} alt={`Slide ${currentSlide}`} /> */}
            <img 
                src={slideshow1[currentSlide]} 
                alt={`Slide ${currentSlide}`} 
                style={{ width: '100%', height: 'auto' }} 
            />
        </div>
    )
}




export default Slideshow1;