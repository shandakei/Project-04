import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';
import SoundEffectController from '../../utils/soundEffectsController';

const Scene2 = () => {
  const sceneId = 2;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(15);
  const navigate = useNavigate();

  const soundEffectController = new SoundEffectController();

  const dialogueSoundMap = {
    18: { category: 'zombie', sound: 'breath' },
    21: { category: 'zombie', sound: 'breath' },
    24: { category: 'zombie', sound: 'breath' },
    34: { category: 'zombie', sound: 'croak' },
    35: { category: 'zombie', sound: 'snarl5' },
    36: { category: 'boy', sound: 'grunt3' },
    39: { category: 'env', sound: 'running1' },
    40: { category: 'zombie', sound: 'croak' },
    41: { category: 'env', sound: 'runningFade1' },
  };

  const handleNext = () => {
    defaultAudioController.play();

    const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);
    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next);
      } else {
        console.log('Choices available, waiting for user selection');
      }
    } else {
      console.log(currentDialogue, 'Sc2/handleNext/nextlineId log');
    }

    const sound = dialogueSoundMap[currentDialogue.id];
    if (sound) {
      soundEffectController.play(sound.category, sound.sound);
      const audio = soundEffectController.sounds[sound.category][sound.sound];
      audio.volume = 0.5; 
      audio.playbackRate = 1;
      console.log(`Playing sound: ${sound.sound}`);
    }

    if (currentDialogue.id === 43) {
      defaultAudioController.fadeOut();
      navigate('/cutscene1_1');
    }
  };

  const handleSelectChoice = (nextId) => {
    console.log(`/handleSelectChoice: Choice selected: ${nextId}`);
    const nextDialogue = dialogues.find(d => d.id === nextId);
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id);
      handleNext();
    } else {
      console.error('Dialogue not found for id:', nextId);
    }
  };

  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);
  console.log(currentDialogue, 'Current Dialogue');

  return (
    <div className="scene-container" onClick={handleNext} style={{ backgroundImage: "url('/media/default_background_night.png')" }}>
      <img src="/media/DT.png" alt="Character" id="character-image" />

      {currentDialogue && currentDialogue.name === 'hidden' && (
        <div className="other-character-div">
          <img src="/media/zom-1-hidden.png" alt="Character" className="other-character-image" />
        </div>
      )}
      {currentDialogue && currentDialogue.name === 'zombie' && (
        <div className="other-character-div">
          <img src="/media/zom-1.png" alt="Character" className="other-character-image" />
        </div>
      )}

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

export default Scene2;
