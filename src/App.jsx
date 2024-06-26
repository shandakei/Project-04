import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //test
import Scene1 from './components/Scenes/scene_1';
import Scene2 from './components/Scenes/scene_2';
import Scene3 from './components/Scenes/scene_3';

export default function App() {
  const navigate = useNavigate();
  const [story, setStory] = useState([]);
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





//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Scene1 line={line} handleNavigation={handleNavigation} />} />
//         <Route path="/scene2" element={<Scene2 line={line} handleNavigation={handleNavigation} />} />
//         <Route path="/scene3" element={<Scene3 line={line} handleNavigation={handleNavigation} />} />
//       </Routes>
//       <button onClick={clearProgress}>Restart Story</button>
//       <div className="snowflake">❅</div>
//       <div className="snowflake">❆</div>
//       <div className="snowflake">❅</div>
//       <div className="snowflake">❆</div>
//       <div className="snowflake">❅</div>
//       <div className="snowflake">❆</div>
//       <div className="snowflake">❅</div>
//       <div className="snowflake">❆</div>
//       <div className="snowflake">❅</div>
//     </Router>
//   );
// };


// export default App;
