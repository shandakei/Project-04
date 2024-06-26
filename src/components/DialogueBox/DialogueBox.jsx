// import React, { useState, useEffect } from 'react';
import React from 'react'
import './DialogueBox.css';
// import { dialogues } from './dialogue'

export default function DialogueBox({ dialogue, choices, onSelectChoice }) {
  return (
    <div className="dialogue-box">
      <p>{dialogue}</p>
      {choices && (
        <div className="choices">
          {choices.map(choice => (
            <button key={choice.id} onClick={() => onSelectChoice(choice.next)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}












// export default function DialogueBox({ dialogue, onNext, choices, onSelectChoice }) {
//   const [displayedText, setDisplayedText] = useState('')
//   const [currentTextIndex, setCurrentTextIndex] = useState(0)

//   useEffect(() => {
//     setDisplayedText('')
//     setCurrentTextIndex(0)
//     let currentIndex = 0

//     const intervalId = setInterval(() => {
//       setDisplayedText(dialogue.substring(0, currentIndex + 1))
//       currentIndex++;

//       if (currentIndex === dialogue.length) {
//         clearInterval(intervalId)
//       }
//     }, 50)

//     return () => clearInterval(intervalId)
//   }, [dialogue]);

//   const handleClick = () => {
//     if (!choices) {
//       onNext()
//     }
//   }

//   return (
//     <div className="dialogue-box" onClick={handleClick}>
//       <p>{displayedText}</p>
//       {displayedText === dialogue && choices && (
//         <div className="choices">
//           {choices.map((choice, index) => (
//             <button key={index} onClick={() => onSelectChoice(choice.next)}>
//               {choice.text}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
