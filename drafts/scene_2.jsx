import React, { useState } from 'react';
import './default_scene.css'; 
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/Dialogue'; 

const Scene2 = ({ handleNavigation }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(14);

  const handleNextDialogue = () => {
      const nextIndex = currentDialogueIndex + 1;
      if (nextIndex === 26 || 43 ||48) {
          setCurrentDialogueIndex(nextIndex);
          handleNavigation('/scene3'); 
      }
  };

  const handleSelectChoice = (nextIndex) => {
      setCurrentDialogueIndex(nextIndex);
  };

  const currentDialogue = dialogues[currentDialogueIndex];

  return (
      <div className="scene-container scene2img" >
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

export default Scene2;