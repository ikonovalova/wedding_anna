import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home.jsx';
import Faq from './pages/FAQ/FAQ.jsx';
import Schedule from './pages/Plan/Plan.jsx';
import About from './pages/About/About.jsx';
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
