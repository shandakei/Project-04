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

  const [currentLineId, setCurrentLineId] = useState(sceneDialogues[0]?.id);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const navigate = useNavigate();

  const soundEffectController = new SoundEffectController();

  const dialogueSoundMap = {
    4: { category: 'environment', sound: 'footsteps1' },
    9: { category: 'environment', sound: 'footsteps1' },
  };

  const handleNext = () => {
    if (!audioPlayed) {
      defaultAudioController.play()
      setAudioPlayed(true);
    }

    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);
    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next);
      } else {
        console.log('Choices available, waiting for user selection');
      }
    } else {
      console.log(currentDialogue, 'Sc1/handleNext/nextlineId log');
    }

    const sound = dialogueSoundMap[currentDialogue.id];
    if (sound) {
      soundEffectController.play(sound.category, sound.sound);
  
      const audio = soundEffectController.sounds[sound.category][sound.sound];
      audio.volume = 1;
      audio.playbackRate = 0.8; 
      console.log(`Playing sound: ${sound.sound} with volume: ${audio.volume} and playback rate: ${audio.playbackRate}`);
    }

    if (currentDialogue.id === 14) {
      navigate('/scene2');
    }
  };

  const handleSelectChoice = (nextId) => {
    console.log(`/handleSelectChoice: Choice selected: ${nextId}`);
    const nextDialogue = dialogues.find(d => d.id === nextId); 
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id); 
      handleNext(); 
    } else {
      console.error('err', nextId);
    }
  };
  
  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);
  console.log(currentDialogue, 'Current Dialogue');

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
