import React, { useEffect } from 'react';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import { tsParticles } from 'tsparticles-engine';
import '../styles/Effects.css'

const SnowEffect = () => {
  useEffect(() => {
    const loadSnowEffect = async () => {
      await loadSnowPreset(tsParticles);
      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "snow",
        },
      });
    };

    loadSnowEffect();
  }, []);

  return <div id="tsparticles" 
//   style={{ 
//     position: 'fixed', 
//     top: 0, 
//     left: 0, 
//     width: '100%', 
//     height: '100%', 
//     backgroundColor: 'none', 
//     opacity: '10%',
//     background: 'none' 
// }} 
/>;
};

export default SnowEffect;

//CHECK IF YOU CAN SET THE PARENT CSS OPACITY TO FUCK ALL THEN THE KIDS OPACITY UP AND MAKE MORE WHITE