import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Scene1 from './components/Scenes/scene_1';
import Scene2 from './components/Scenes/scene_2';
import Cutscene1_1 from './components/cutscenes/cutscene1_1.jsx';
import Slideshow1 from './components/Slideshows/slideshow1.jsx';
import Cutscene1_2 from './components/cutscenes/cutscene1_2.jsx';
import Scene3 from './components/Scenes/scene_3';
import Scene4 from './components/Scenes/scene_4.jsx';
import Scene5 from './components/Scenes/scene_5.jsx';
import Scene6 from './components/Scenes/scene_6.jsx';
import Credits from './components/Scenes/credits.jsx';

export default function App() {
  const navigate = useNavigate();

  const [currentScene, setCurrentScene] = useState(() => localStorage.getItem('currentScene') || '/');
  const [choices, setChoices] = useState(() => {
    const storedChoices = localStorage.getItem('choices');
    return storedChoices ? JSON.parse(storedChoices) : [];
  });

  const clearProgress = () => {
    setCurrentScene('/');
    setChoices([]);
    localStorage.removeItem('currentScene');
    localStorage.removeItem('choices');
    navigate('/');
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div onMouseDown={handleMouseDown}>
      <button id='restart' onClick={clearProgress}>Restart Story</button>
      <Routes>
        <Route path="/" element={<Scene1 />} />
        <Route path="/scene2" element={<Scene2 />} />
        <Route path="/cutscene1_1" element={<Cutscene1_1 />} />
        <Route path="/slideshow1" element={<Slideshow1 />} />
        <Route path="/cutscene1_2" element={<Cutscene1_2 />} />
        <Route path="/scene3" element={<Scene3 />} />
        <Route path="/scene4" element={<Scene4 />} />
        <Route path="/scene5" element={<Scene5 />} />
        <Route path="/scene6" element={<Scene6 />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>

    </div>
  );
}
