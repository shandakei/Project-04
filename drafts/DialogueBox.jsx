import React, { useState, useEffect } from 'react';
import '../DialogueBox/DialogueBox.css';


export default function DialogueBox({ dialogue, onNext, choices, onSelectChoice }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
      setDisplayedText('');
      setCurrentTextIndex(0);
      let currentIndex = 0;

      const intervalId = setInterval(() => {
          setDisplayedText(dialogue.substring(0, currentIndex + 1));
          currentIndex++;

          if (currentIndex === dialogue.length) {
              clearInterval(intervalId);
          }
      }, 50); // Typing speed

      return () => clearInterval(intervalId);
  }, [dialogue]);

  const handleClick = () => {
      if (!choices) {
          onNext();
      }
  };

  return (
      <div className="dialogue-box" onClick={handleClick}>
          <p>{displayedText}</p>
          {displayedText === dialogue && choices && (
              <div className="choices">
                  {choices.map((choice, index) => (
                      <button key={index} onClick={() => onSelectChoice(choice.next)}>
                          {choice.text}
                      </button>
                  ))}
              </div>
          )}
      </div>
  );
}