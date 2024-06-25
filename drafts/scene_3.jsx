import React from 'react';
import './default_scene.css'; 

const Scene3 = ({ line, handleNavigation }) => {
  return (
    <div>
      <h2>Scene 3</h2>
      <img src="public/media/DT.png" alt="DT" className="character-portrait" />
      <p>{line(3)}</p>
      <button onClick={() => handleNavigation('/')}>Back to Scene 1</button>
    </div>
  );
};

export default Scene3;
