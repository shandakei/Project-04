import React from 'react';
import './DialogueBox.css';


export default function DialogueBox({ dialogue, choices, onSelectChoice }) {
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div className="dialogue-box" onMouseDown={handleMouseDown}>
      <p>{dialogue}</p>
      {choices && (
        <div className="choices">
          {choices.map((choice) => (
            <button key={choice.id} onClick={() => onSelectChoice(choice.next)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
