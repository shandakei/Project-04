import React, { useState } from 'react';
import './default_scene.css';
import Dialogue from '../DialogueBox/Dialogue';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';

const Scene3 = () => {
  const sceneId = 3;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = (nextIndex) => {
    if (nextIndex !== undefined) {
      setCurrentLineIndex(nextIndex);
    } else if (currentLineIndex < sceneDialogues.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    } else {
      navigate('/');  // Navigate to the start or another scene
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

export default Scene3;