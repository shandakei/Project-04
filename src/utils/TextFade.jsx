import React, { useState, useEffect } from 'react';
import './TextFade.css';

const TextFade = ({ text, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`fade-text ${visible ? 'visible' : ''}`} style={{ transitionDuration: `${duration}ms` }}>
      {text}
    </div>
  );
};

export default TextFade;
