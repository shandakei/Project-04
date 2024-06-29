import React, { useState, useEffect } from 'react';
// import './default_scene.css';
// import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
// import TextAnimation from '../../utils/TextAnimation';
// import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';
import ss3AudioController from '../../utils/ss3AudioController';

const Credits = () => {

  const sceneId = 'credits';
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(100_000_000);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (!audioPlayed) {
      defaultAudioController.play();
      setAudioPlayed(true);
    }
    
    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);
    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next);
      } else {
        console.log('Choices available, waiting for user selection');
      }
    } else {
      console.log(currentDialogue, 'Sc3/handleNext/nextlineId log');
    }

    if (currentDialogue.id === 98) {
      defaultAudioController.fadeOut();
      ss3AudioController.play();
    }

    if (currentDialogue.id === 156 || currentDialogue.id === 169) {
      ss3AudioController.fadeOut();
      navigate('/scene3');
    }
  };


  
  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

  
  let backgroundImage = "url('/media/default_background_night.png')";
  if ((currentDialogue?.id >= 150 && currentDialogue?.id <= 156) || 
     (currentDialogue?.id >= 163 && currentDialogue?.id <= 169)) {
    backgroundImage = "url('/media/s3bg_1.png')";
  }

  return (
      <div className="credits-container" onClick={handleNext} style={{ backgroundImage }} >
      
      </div>
  )
}

export default Scene3;
