// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout.jsx';
// import Home from './pages/Home.jsx';
// import FAQ from './pages/FAQ/FAQ.jsx';
// import Schedule from './pages/Plan.jsx';
// import About from './pages/About.jsx';
// import Gallery from './pages/Gallery.jsx';
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//                      <Routes>
//                         тест
//                          <Route path="/" element={<Layout />}>
//                              <Route index element={<Home />} />
//                              <Route path="faq" element={<FAQ />} />
//                              <Route path="schedule" element={<Schedule />} />
//                              <Route path="about" element={<About />} />
//                              <Route path="gallery" element={<Gallery />} />
//                          </Route>
//                      </Routes>
//       {/*<div>*/}
//       {/*  <a href="https://vite.dev" target="_blank">*/}
//       {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
//       {/*  </a>*/}
//       {/*  <a href="https://react.dev" target="_blank">*/}
//       {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
//       {/*  </a>*/}
//       {/*</div>*/}
//       {/*<h1>Vite + React</h1>*/}
//       {/*<div className="card">*/}
//       {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
//       {/*    count is {count}*/}
//       {/*  </button>*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
//       {/*  </p>*/}
//       {/*</div>*/}
//       {/*<p className="read-the-docs">*/}
//       {/*  Click on the Vite and React logos to learn more*/}
//       {/*</p>*/}
//     </>
//   )
// }
//
// export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home.jsx';
import Faq from './pages/FAQ/FAQ.jsx';
import Schedule from './pages/Plan/Plan.jsx';
import About from './pages/About';
import Gallery from './pages/Gallery.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="faq" element={<Faq />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="about" element={<About />} />
                <Route path="gallery" element={<Gallery />} />
            </Route>
        </Routes>
    );
}

export default App;
