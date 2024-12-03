import React, { useState, useEffect } from 'react';
import './slideshow_default.css';
import { useNavigate } from 'react-router-dom';
import ss1AudioController from '../../utils/ss1AudioController';
import LinkEffect from '../../utils/LinkEffect';

const Slideshow1 = () => {
    const navigate = useNavigate();
    const slideshow1 = [
        '/media/1_breakfast.png',
        '/media/2_leaving_house.png',
        '/media/3_boarding.png',
        '/media/4_plane_window.png',
        '/media/5_anchor.png',
        '/media/6_crowd.png',
        '/media/7_chasing_people.png',
        '/media/8_breaking_news.png',
        '/media/9_huddle.png',
        '/media/10_missile_trail.png',
        '/media/11_nuke_light.png',
        '/media/12_mushroom.png',
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
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [navigate, slideshow1.length]);

    return (
        <div className='slide-show-div'>
            <div className='link-effect-background' style={{ zIndex: 0 }}>
                <LinkEffect />
             </div>
            <img 
                className='slide-img-display'
                src={slideshow1[currentSlide]} 
                alt={`Slide ${currentSlide}`} 
                style={{ zIndex: 1, position: 'relative' }}
            />
        </div>
    );
};

export default Slideshow1;
