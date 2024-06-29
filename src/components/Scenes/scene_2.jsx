import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';

const Scene2 = () => {

  const sceneId = 2;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues)

  const [currentLineId, setCurrentLineId] = useState(15)
  // const [audioPlayed, setAudioPlayed] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {

    defaultAudioController.play();
    
    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId)
    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next)
      } else {
        console.log('Choices available, waiting for user selection')
      }
    } else {
      console.log(currentDialogue, 'Sc2/handleNext/nextlineId log')
    }
    if (currentDialogue.id === 43) {
      defaultAudioController.fadeOut()
      navigate('/cutscene1_1')
    }

  }

  const handleSelectChoice = (nextId) => {
    console.log(`/handleSelectChoice: Choice selected: ${nextId}`)
    const nextDialogue = dialogues.find(d => d.id === nextId); 
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id); 
      handleNext(); 
    } else {
      console.error('Dialogue not found for id:', nextId);
    }
  }
  
  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId)
  console.log(currentDialogue, 'Current Dialogue')


  return (
      <div className="scene-container" onClick={handleNext} style={{ backgroundImage: "url('/media/default_background_night.png')" }}>
          <img src="/media/DT.png" alt="Character" id="character-image" />

          {currentDialogue && currentDialogue.name === 'hidden' && (
            <div className="other-character-div" >
              <img src="/media/zom-1-hidden.png" alt="Character" className="other-character-image" />
            </div>
          )}
          {currentDialogue && currentDialogue.name === 'zombie' && (
            <div className="other-character-div" >
              <img src="/media/zom-1.png" alt="Character" className="other-character-image" />
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



export default Scene2
