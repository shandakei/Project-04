import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Scene1 from './components/Scenes/scene_1';
import Scene2 from './components/Scenes/scene_2';
import Cutscene1_1 from './components/cutscenes/cutscene1_1.jsx';
import Slideshow1 from './components/Slideshows/slideshow1.jsx';
import Cutscene1_2 from './components/cutscenes/cutscene1_2.jsx';
import Scene3 from './components/Scenes/scene_3';

export default function App() {

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
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Scene1 />} />
        <Route path="/scene2" element={<Scene2 />} />
        <Route path="/cutscene1_1" element={<Cutscene1_1 />} />
        <Route path="/slideshow1" element={<Slideshow1 />} />
        <Route path="/cutscene1_2" element={<Cutscene1_2 />} />
        <Route path="/scene3" element={<Scene3  />} />
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

//JF likes green


{/* <Route path="/cutscene/:id" element={<Cutscene  />} /> */}

// const cutscene1 = [
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/1_breakfast.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/2_leaving.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/3_boarding.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/4_plane_window.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/5_anchor.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/6_crowd.png',
//   '/home/shandakei/seb/projects/project-04/interactive-novel/public/media/7_chasing_people.png'
//   ]