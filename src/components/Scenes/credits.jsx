import React, { useState, useEffect } from 'react';
import './Credits.css';
import creditsAudioController from '../../utils/CreditsAudioController';
import LinkEffect from '../../utils/LinkEffect';

const Credits = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const creditsContent = [
    { type: 'text', content: '_' },
    { type: 'text', content: '__' },
    { type: 'text', content: '___' },
    { type: 'text', content: '____' },
    { type: 'text', content: ' "My Son, Xiao\'Er" ' },
    { type: 'text', content: 'based on true events' },
    { type: 'text', content: 'in another world' },
    { type: 'text', content: '...' },
    { type: 'text', content: 'Thank you for bearing witness' },
    { type: 'text', content: '..End of Chapter 1..' },
    { type: 'image', content: 'public/media/DT.png' },
    { type: 'image', content: 'public/media/Ange.png' },
    { type: 'image', content: 'public/media/Eric.png' },
    { type: 'image', content: 'public/media/Bernie.png' },
    { type: 'image', content: 'public/media/Georgia.png' },
    { type: 'image', content: 'public/media/Leo.png' },
    { type: 'image', content: 'public/media/Mark.png' },
    { type: 'image', content: 'public/media/JF.png' },
    { type: 'image', content: 'public/media/Ting.png' },
    // { type: 'image', content: 'public/media/-----.png' },
  ];

  const startCredits = () => {
    creditsAudioController.play();
    creditsAudioController.setVolume(0.05); 
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 3000000); 

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="credits-container">

      <LinkEffect />
      {!isPlaying ? (
        <button className="start-button" onClick={startCredits}>
          Start Credits
        </button>
      ) : (
        <div className="credits-roll">
          <div className="credits-content">
            {creditsContent.map((item, index) => (
              item.type === 'text' ? (
                <p key={index}>{item.content}</p>
              ) : (
                <div key={index} className="credits-image">
                  <img src={item.content} alt={`Credits ${index}`} />
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Credits;
