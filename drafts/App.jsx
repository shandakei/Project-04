
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Scene1 from './components/Scenes/scene_1'
import Scene2 from './components/Scenes/scene_2'
import Scene3 from './components/Scenes/scene_3'
import { dialogues } from './components/DialogueBox/Dialogue'; 

function App() {
  //---------------------------HOOKS---------------------------

  const navigate = useNavigate()
  const [story, setStory] = useState([])
  const [currentScene, setCurrentScene] = useState(() => {
    return localStorage.getItem('currentScene') || '/';
  })
  const [choices, setChoices] = useState(() => {
    const storedChoices = localStorage.getItem('choices');
    return storedChoices ? JSON.parse(storedChoices) : [];
  })


  //---------------------------FUNCTIONS---------------------------


  useEffect(() => {
    fetch('/story.txt')
      .then(res => res.text())
      .then(data => {
        const lines = data.split('\n');
        console.log('Fetched story lines:', lines);
        setStory(lines);
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('currentScene', currentScene)
    localStorage.setItem('choices', JSON.stringify(choices));
    navigate(currentScene)
  }, [currentScene, navigate])

  const line = (id) => {
    let storyLine = story[id - 1] 
    return storyLine
  }
  const handleNavigation = (scene, choice) => {
    setCurrentScene(scene);
    setChoices([...choices, choice])
  }

  const clearProgress = () => {
    setCurrentScene('/');
    setChoices([]);
    localStorage.removeItem('currentScene');
    localStorage.removeItem('choices');
  };

  //---------------------------RETURN---------------------------
  return (
    <>
      <Routes>
        <Route path="/" element={<Scene1 line={line} handleNavigation={handleNavigation} />} />
        <Route path="/scene2" element={<Scene2 line={line} handleNavigation={handleNavigation} />} />
        <Route path="/scene3" element={<Scene3 line={line} handleNavigation={handleNavigation} />} />
      </Routes>

      
      <button onClick={clearProgress}>Restart Story</button>

      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
    </>
  );
}

export default App
