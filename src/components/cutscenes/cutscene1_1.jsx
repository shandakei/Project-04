import React, { useState, useEffect } from 'react';
import './cutscene_default.css';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import LinkEffect from '../../utils/LinkEffect';

const Cutscene1_1 = () => {

  const sceneId = 'cutscene_1';
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues)

  const [currentLineId, setCurrentLineId] = useState(49)
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
      console.log(currentDialogue, 'Sc2/handleNext/nextlineId log')
    }
    if (currentDialogue.id === 59) {
      navigate('/slideshow1')
    }

  }
  
  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId)
  console.log(currentDialogue, 'Current Dialogue')

  const handleMouseDown = (event) => {
    event.preventDefault();
  };


  return (
      <div className="cutscene-container" onClick={handleNext} style={{ backgroundImage: "" }} onMouseDown={handleMouseDown}>

        <LinkEffect />

        {currentDialogue && (
        <TextAnimation text={currentDialogue.text} speed={60} />
      )}
          
      </div>
  )
}



export default Cutscene1_1

