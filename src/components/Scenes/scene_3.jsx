// import React, { useState } from 'react';
// import './default_scene.css';
// import Dialogue from '../DialogueBox/Dialogue';
// import { dialogues } from '../DialogueBox/dialogue';
// import { getDialoguesForScene } from '../../utils/sortByScene';
// import { useNavigate } from 'react-router-dom';

// const Scene2 = () => {
//   const sceneId = 2;
//   const sceneDialogues = getDialoguesForScene(sceneId, dialogues);
//   const [currentLineIndex, setCurrentLineIndex] = useState(15);
//   const navigate = useNavigate();

//   const handleNext = (nextIndex) => {
//     if (nextIndex !== undefined) {
//       setCurrentLineIndex(nextIndex);
//     } else if (currentLineIndex < sceneDialogues.length - 1) {
//       setCurrentLineIndex(currentLineIndex + 1);
//     } else {
//       navigate('/scene3');  // Navigate to Scene 3
//     }
//   };

//   return (
//     <div className="scene-container" style={{ backgroundImage: "url('/media/default_background_night.png')" }}>
//       <img src="/media/DT.png" alt="Character" id="character-image" />
//       {sceneDialogues.length > 0 && (
//         <Dialogue 
//           lines={sceneDialogues} 
//           currentLineIndex={currentLineIndex} 
//           onNext={handleNext} 
//         />
//       )}
//     </div>
//   );
// };

// export default Scene2;

import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';

const Scene2 = () => {

  const sceneId = 2;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues)

  const [currentLineId, setCurrentLineId] = useState(65)
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
      console.log(currentDialogue, 'Sc3/handleNext/nextlineId log')
    }
    if (currentDialogue.id === 43) {
      navigate('/')
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



export default Scene2
