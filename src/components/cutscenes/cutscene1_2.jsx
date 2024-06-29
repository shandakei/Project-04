import React, { useState, useEffect } from 'react';
import './cutscene_default.css';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import ss1AudioController from '../../utils/ss1AudioController';
import TextAnimation from '../../utils/TextAnimation';


const Cutscene1_2 = () => {

  const sceneId = 'cutscene_1_2';
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues)

  const [currentLineId, setCurrentLineId] = useState(60)
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
      console.log(currentDialogue, 'cs1_2/handleNext/nextlineId log')
    }
    if (currentDialogue.id === 64) {
        navigate('/scene3')
        ss1AudioController.fadeOut();
    }
}

  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId)
  console.log(currentDialogue, 'Current Dialogue')


  return (
      <div className="cutscene-container cc12" onClick={handleNext}  backgroundImage={"url('/media/darkness_background.png')"} >

      {currentDialogue && (
              <TextAnimation text={currentDialogue.text} speed={60} />
            )}
          
      </div>
  )
}



export default Cutscene1_2
