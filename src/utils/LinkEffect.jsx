import React, { useEffect } from 'react';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { tsParticles } from 'tsparticles-engine';

const LinkEffect = () => {
  useEffect(() => {
    const loadLinkEffect = async () => {
      await loadLinksPreset(tsParticles);
      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "links",
        },
      });
    };

    loadLinkEffect();
  }, []);

  return (
    <div
      id="tsparticles"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'none',
        opacity: '25%',
        background: 'none',
      }}
    />
  );
};

export default LinkEffect;
