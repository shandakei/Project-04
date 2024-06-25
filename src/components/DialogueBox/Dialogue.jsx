import React from 'react';
import DialogueBox from './DialogueBox';

const Dialogue = ({ lines, currentLineIndex, onNext }) => {
  const currentDialogue = lines[currentLineIndex];

  if (!currentDialogue) {
    return null;
  }

  const { text, choices } = currentDialogue;

  const handleSelectChoice = (nextIndex) => {
    onNext(nextIndex);
  };

  return (
    <div>
      <DialogueBox 
        dialogue={text} 
        onNext={() => onNext(currentDialogue.id + 1)} 
        choices={choices} 
        onSelectChoice={handleSelectChoice} 
      />
    </div>
  );
};

export default Dialogue;
