import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';
import ss3AudioController from '../../utils/ss3AudioController';

const Scene3 = () => {

  const sceneId = 3;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(65);
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
      navigate('/scene4');
    }
  };

  const handleSelectChoice = (nextId) => {
    console.log(`/handleSelectChoice: Choice selected: ${nextId}`);
    const nextDialogue = dialogues.find(d => d.id === nextId); 
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id); 
      handleNext(); 
    } else {
      console.error('Dialogue not found for id:', nextId);
    }
  };
  
  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

  
  let backgroundImage = "url('/media/default_background_night.png')";
  if ((currentDialogue?.id >= 150 && currentDialogue?.id <= 156) || 
     (currentDialogue?.id >= 163 && currentDialogue?.id <= 169)) {
    backgroundImage = "url('/media/s3bg_1.png')";
  }

  return (
      <div className="scene-container" onClick={handleNext} style={{ backgroundImage }} >
          <img src="/media/DT.png" alt="Character" id="character-image" />

          {currentDialogue && currentDialogue.name === 'hidden' && (
            <div className="other-character-div" >
              <img src="/media/zom-2-hidden.png" alt="Character" className="other-character-image" />
            </div>
          )}
          {currentDialogue && currentDialogue.name === 'zombie' && (
            <div className="other-character-div" >
              <img src="/media/zom-2.png" alt="Character" className="other-character-image" />
            </div>
          )}
          {currentDialogue && currentDialogue.name === 'Ange' && (
            <div className="other-character-div" >
              <img src="/media/Ange.png" alt="Character" className="other-character-image" />
            </div>
          )}

          <SnowEffect />
          {currentDialogue && (
            <DialogueBox
              dialogue={<TextAnimation text={currentDialogue.text} speed={50} />}
              choices={currentDialogue.choices}
              onSelectChoice={handleSelectChoice}
            />
          )}
      </div>
  )
}

export default Scene3;
