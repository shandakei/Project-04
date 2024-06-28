import React, { useState, useEffect } from 'react';
import './slideshow_default.css';
import { useNavigate } from 'react-router-dom';
import ss1AudioController from '../../utils/ss1AudioController';

const Slideshow1 = () => {
    const navigate = useNavigate();
    const slideshow1 = [
        '../../../public/media/1_breakfast.png',
        '../../../public/media/2_leaving_house.png',
        '../../../public/media/3_boarding.png',
        '../../../public/media/4_plane_window.png',
        '../../../public/media/5_anchor.png',
        '../../../public/media/6_crowd.png',
        '../../../public/media/7_chasing_people.png',
        '../../../public/media/8_breaking_news.png',
        '../../../public/media/9_huddle.png',
        '../../../public/media/10_missile_trail.png',
        '../../../public/media/11_nuke_light.png',
        '../../../public/media/12_mushroom.png',
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        ss1AudioController.play();

        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                const nextSlide = (prevSlide + 1) % slideshow1.length;
               
                if (nextSlide === 0) {
                    clearInterval(interval);
                    navigate('/cutscene1_2');
                }
                return nextSlide;
            });
        }, 1000); //5000 when finished

        return () => {
            clearInterval(interval);
        };
    }, [navigate, slideshow1.length]);

    return (
        <div className='slide-show-div'>
            <img 
                className='slide-img-display'
                src={slideshow1[currentSlide]} 
                alt={`Slide ${currentSlide}`} 
            />
        </div>
    )
}

export default Slideshow1;
