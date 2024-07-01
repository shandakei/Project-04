import React, { useState, useEffect } from 'react';
import './default_scene.css';
import DialogueBox from '../DialogueBox/DialogueBox';
import { dialogues } from '../DialogueBox/dialogue';
import { getDialoguesForScene } from '../../utils/sortByScene';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../utils/TextAnimation';
import SnowEffect from '../../utils/SnowEffect';
import sc6AudioDefault from '../../utils/sc6AudioController';

const Scene6 = () => {
  const sceneId = 6;
  const sceneDialogues = getDialoguesForScene(sceneId, dialogues);

  const [currentLineId, setCurrentLineId] = useState(289); 
  const [audioPlayed, setAudioPlayed] = useState(false);
  const navigate = useNavigate();

  const currentDialogue = sceneDialogues.find(dialogue => dialogue.id === currentLineId);

  const handleNext = () => {
    if (!audioPlayed) {
      sc6AudioDefault.play();
      sc6AudioDefault.setVolume(0.025); 
      setAudioPlayed(true);
    }

    if (currentDialogue && currentDialogue.next) {
      if (!currentDialogue.choices) {
        setCurrentLineId(currentDialogue.next);
      } else {
        console.log('Choices available, waiting for user selection');
      }
    } else {
      console.log(currentDialogue, 'Sc6/handleNext/nextlineId log');
    }

    if (currentDialogue.id === 361) {
      sc6AudioDefault.fadeOut();
      navigate('/credits');
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

  useEffect(() => {
    if (currentDialogue && currentDialogue.id === 1_000_000) {
      navigate('/credits');
    }
  }, [currentDialogue, navigate]);

  let backgroundImage = "/media/apartment_BG.png";
  if (currentDialogue?.id >= 289 && currentDialogue?.id <= 296) {
    backgroundImage = "url('/media/apartment_BG.png')";
  }

  const characterImages = {
    DT: "/media/DT.png",
    Ange: "/media/Ange.png",
    Eric: "/media/Eric.png",
    Bernie: "/media/Bernie.png",
    Georgia: "/media/Georgia.png",
    Leo: "/media/Leo.png",
    Mark: "/media/Mark.png",
    Ting: "/media/Ting.png",
    JF: "/media/JF.png",
  };

  const getCharacterImage = (name) => characterImages[name] || "/media/Ange.png";

  return (
    <div className="scene-container" onClick={handleNext} style={{ backgroundImage }}>
      <img src={getCharacterImage('DT')} alt="Character" id="character-image" />
      {currentDialogue && currentDialogue.name !== 'DT' && (
        <div className="other-character-div">
          <img src={getCharacterImage(currentDialogue.name)} alt="Character" className="other-character-image" />
        </div>
      )}
      {/* <SnowEffect /> */}
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

export default Scene6;
