import React, { useState } from 'react';
import './default_scene.css'; 
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/Dialogue'; 

const Scene1 = ({ handleNavigation }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0)

  const handleNextDialogue = () => {
      const nextIndex = currentDialogueIndex + 1;
      if (nextIndex === 14) {
          setCurrentDialogueIndex(nextIndex);
          handleNavigation('/scene2'); 
        }
      
  };

  const handleSelectChoice = (nextIndex) => {
      setCurrentDialogueIndex(nextIndex);
  };

  const currentDialogue = dialogues[currentDialogueIndex]

  return (
      <div className="scene-container" style={{ backgroundImage: "url('/media/default_background.jpg')" }}>
          <img src="/media/DT.png" alt="Character" id="character-image" />
          <DialogueBox
              dialogue={currentDialogue.text}
              onNext={handleNextDialogue}
              choices={currentDialogue.choices}
              onSelectChoice={handleSelectChoice}
          />
      </div>
  );
};


export default Scene1;


