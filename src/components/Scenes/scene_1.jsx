import React, { useState, useEffect } from 'react';
import './default_scene.css';
import Dialogue from '../DialogueBox/Dialogue';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';

const Scene1 = () => {
  const sceneId = 1;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentLineIndex === 13 || currentLineIndex === 14) {
      navigate('/scene2');
    }
  }, [currentLineIndex, navigate]);
  const handleNext = (nextIndex) => {
    const sceneDialoguesLength = sceneDialogues.length;
  
    console.log('currentLineIndex:', currentLineIndex, 'nextIndex:', nextIndex);
  
    if (nextIndex !== undefined && nextIndex < sceneDialoguesLength) {
      setCurrentLineIndex(nextIndex - 1); // Convert `id` to array index
    } else if (currentLineIndex === 12 && nextIndex === 14) {
      // Directly navigate to the next scene if the choice is to find shelter
      navigate('/scene2');
    } else if (currentLineIndex < sceneDialoguesLength - 1) {
      setCurrentLineIndex(prevIndex => prevIndex + 1);
    } else if (currentLineIndex === sceneDialoguesLength - 1) {
      navigate('/scene2');
    }
  };
  
  

  return (
    <div className="scene-container" style={{ backgroundImage: "url('/media/default_background.jpg')" }}>
      <img src="/media/DT.png" alt="Character" id="character-image" />
      {sceneDialogues.length > 0 && (
        <Dialogue 
          lines={sceneDialogues} 
          currentLineIndex={currentLineIndex} 
          onNext={handleNext} 
        />
      )}
    </div>
  );
};

export default Scene1;
