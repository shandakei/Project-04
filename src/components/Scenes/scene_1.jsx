import React, { useState, useEffect } from 'react';
import './default_scene.css';
import SnowEffect from '../../utils/SnowEffect';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import defaultAudioController from '../../utils/defaultAudioController';
import SoundEffectController from '../../utils/soundEffectsController';

const Scene1 = () => {
  const sceneId = 1;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(sceneDialogues[0]?.id || null);
  const navigate = useNavigate();

  const soundEffectController = new SoundEffectController();

  const dialogueSoundMap = {
    4: { category: 'env', sound: 'footsteps1' },
    9: { category: 'env', sound: 'footsteps1' },
  };

  useEffect(() => {
    console.log('Playing default background audio...');
    defaultAudioController.setVolume(1); // Ensure full volume
    defaultAudioController.play();

    return () => {
      console.log('Pausing default background audio...');
      defaultAudioController.pause();
    };
  }, []);

  const handleNext = async () => {
    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

    if (!currentDialogue) {
      console.error('No dialogue found for current line ID:', currentLineId);
      return;
    }

    if (currentDialogue.id >= 14) {
      console.log('Navigating to Scene2...');
      defaultAudioController.fadeOut(); // Fade out audio
      setTimeout(() => {
        navigate('/scene2'); // Navigate after fade-out
      }, 1000); // Delay matches fade-out duration
      return;
    }

    if (currentDialogue.next) {
      setCurrentLineId(currentDialogue.next);
    } else {
      console.error('No next dialogue available and not the last dialogue.');
    }

    const sound = dialogueSoundMap[currentDialogue?.id];
    if (sound) {
      soundEffectController.play(sound.category, sound.sound);
    }
  };

  const handleSelectChoice = (nextId) => {
    console.log(`/handleSelectChoice: Choice selected: ${nextId}`);
  
    const nextDialogue = sceneDialogues.find(d => d.id === nextId);
  
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id);
  
      // Fallback: Timed navigation after choice 13
      if (nextId === 13) {
        console.log('Fallback triggered: Navigating to Scene2...');
        setTimeout(() => {
          console.log('Navigating to Scene2 via handleSelectChoice fallback...');
          defaultAudioController.fadeOut();
          navigate('/scene2');
        }, 1000); // 1-second delay
      }
    } else {
      console.error('Dialogue not found for id:', nextId);
    }
  };
  

  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

  return (
    <div className="scene-container" onClick={handleNext} style={{ backgroundImage: "url('/media/default_background.jpg')" }}>
      <img src="/media/DT.png" alt="Character" id="character-image" />
      <SnowEffect />
      {currentDialogue && (
        <DialogueBox
          dialogue={<TextAnimation text={currentDialogue.text} speed={50} />}
          choices={currentDialogue.choices}
          onSelectChoice={handleSelectChoice}
        />
      )}
    </div>
  );
};

export default Scene1;
