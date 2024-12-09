import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import defaultAudioController from '../../utils/defaultAudioController';
import ss3AudioController from '../../utils/ss3AudioController';
import SoundEffectController from '../../utils/soundEffectsController';

const Scene3 = () => {
  const sceneId = 3;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(65);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const navigate = useNavigate();

  const soundEffectController = new SoundEffectController();

  const dialogueSoundMap = {
    69: { category: 'env', sound: 'footsteps1' },
    75: { category: 'env', sound: 'footsteps1' },
    82: { category: 'boy', sound: 'sigh3' },
    84: { category: 'env', sound: 'footsteps1' },
    86: { category: 'env', sound: 'footsteps1' },
    92: { category: 'env', sound: 'footsteps1' },
    96: { category: 'zombie', sound: 'distantRoar2' },
    106: { category: 'girl', sound: 'helpMe1' },
    109: { category: 'env', sound: 'running1' },
    111: {category: 'zombie', sound: 'distantRoar2' },
    113: { category: 'zombie', sound: 'roar2' },
    114: { category: 'zombie', sound: 'roar1' },
    118: { category: 'zombie', sound: 'roar1' },
    119: { category: 'girl', sound: 'hurt1' },
    127: { category: 'zombie', sound: 'roar2' },
    130: { category: 'env', sound: 'running1' },
    134: { category: 'zombie', sound: 'roar1' },
    136: { category: 'zombie', sound: 'snarl1' },
    137: { category: 'zombie', sound: 'roar2' },
    140: { category: 'env', sound: 'footsteps1' },
    142: { category: 'zombie', sound: 'distantRoar1' },
    144: { category: 'env', sound: 'breakingGlass2' },
    149: { category: 'zombie', sound: 'growl1' },
    149: { category: 'zombie', sound: 'snarl2' },
    152: { category: 'zombie', sound: 'distantRoar1' },
    155: { category: 'zombie', sound: 'distantRoar1' },    
    156: { category: 'boy', sound: 'grunt' }, 
    159: { category: 'env', sound: 'breakingGlass2' },
    162: { category: 'zombie', sound: 'distantRoar1' },
    164: { category: 'zombie', sound: 'roar1' },
    167: { category: 'zombie', sound: 'distantRoar1' },
  };
  const handleNext = () => {
    if (!audioPlayed) {
      defaultAudioController.play();
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
      console.log(currentDialogue, 'Sc3/handleNext/nextlineId log');
    }

    
    
    const sound = dialogueSoundMap[currentDialogue.id];
    if (sound) {
      soundEffectController.play(sound.category, sound.sound);
      const audio = soundEffectController.sounds[sound.category][sound.sound];
      audio.volume = 1; 
      audio.playbackRate = 1;
    }
    
    if (currentDialogue.id === 98) {
      defaultAudioController.fadeOut();
      ss3AudioController.play();
    }

    if (currentDialogue.id >= 155 && currentDialogue.id <= 156) { 
      console.log('nav to scene4');     
      ss3AudioController.fadeOut();
      navigate('/scene4');
    }

    if (currentDialogue.id === 169) {
      ss3AudioController.fadeOut();
      navigate('/scene5');
    }
  };

  const handleSelectChoice = (nextId) => {
    
    const nextDialogue = dialogues.find(d => d.id === nextId);
    if (nextDialogue) {
      setCurrentLineId(nextDialogue.id);
      handleNext();
    } else {
      console.error('Dialogue not found for id:', nextId);
    }
  };

  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

  let backgroundImage = "url('/media/default_background_night.png')";
  if ((currentDialogue?.id >= 150 && currentDialogue?.id <= 156) || 
     (currentDialogue?.id >= 163 && currentDialogue?.id <= 169)) {
    backgroundImage = "url('/media/s3bg_1.png')";
  }

  return (
    <div className="scene-container" onClick={handleNext} style={{ backgroundImage }} >
      <img src="/media/DT.png" alt="Character" id="character-image" />

      {currentDialogue && currentDialogue.name === 'hidden' && (
        <div className="other-character-div" >
          <img src="/media/zom-2-hidden.png" alt="Character" className="other-character-image" />
        </div>
      )}
      {currentDialogue && currentDialogue.name === 'zombie' && (
        <div className="other-character-div" >
          <img src="/media/zom-2.png" alt="Character" className="other-character-image" />
        </div>
      )}
      {currentDialogue && currentDialogue.name === 'Ange' && (
        <div className="other-character-div" >
          <img src="/media/Ange.png" alt="Character" className="other-character-image" />
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

export default Scene3;
