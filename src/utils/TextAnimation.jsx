import React, { useState, useEffect } from 'react';

const TextAnimation = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset displayed text when the text prop changes

    let currentIndex = -1;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(currentIndex));
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TextAnimation;
