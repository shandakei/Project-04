import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';

const Scene4 = () => {
  const sceneId = 4;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(171);
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
      console.log(currentDialogue, 'Sc4/handleNext/nextlineId log');
    }

    if (currentDialogue.id >= 217) {
      navigate('/scene6');
    }
  };

  const handleSelectChoice = (nextId) => {
    
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
  if (currentDialogue?.id >= 180 && currentDialogue?.id <= 194) {
    backgroundImage = "url('/media/basement_BG.png')";
  } else if (currentDialogue?.id >= 186 && currentDialogue?.id <= 190) {
    backgroundImage = "url('/media/storage_room_BG.png')";
  } else if (currentDialogue?.id >= 200 && currentDialogue?.id <= 205) {
    backgroundImage = "url('/media/empty_street_BG.png')";
  }

  return (
    <div className="scene-container" onClick={handleNext} style={{ backgroundImage }} >
      <img src="/media/DT.png" alt="Character" id="character-image" />
      <img src="/media/Ange_inactive.png" alt="Character" className="other-character-image" />

      {currentDialogue && currentDialogue.name === 'Ange' && (
        <div className="other-character-div" >
          <img src="/media/Ange.png" alt="Character" className="other-character-image" />
        </div>
      )}

    
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

export default Scene4;
