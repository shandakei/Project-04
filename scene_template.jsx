import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';

const Scene///// = () => {

  const sceneId = /////;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues)

  const [currentLineId, setCurrentLineId] = useState(/////)
  const navigate = useNavigate();

  const handleNext = () => {
    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId)
    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next)
      } else {
        console.log('Choices available, waiting for user selection')
      }
    } else {
      console.log(currentDialogue, 'handleNext log')
    }
    if (currentDialogue.id === /////) {
      navigate('/////') 
    } else if (currentDialogue.id === /////) {
      navigate('/////')
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


          {currentDialogue && (
            <DialogueBox
              dialogue={currentDialogue.text}
              choices={currentDialogue.choices}
              onSelectChoice={handleSelectChoice}
            />
          )}
      </div>
  )
}



export default Scene/////
