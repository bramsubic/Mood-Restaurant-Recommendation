import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MoodButton from './components/MoodButton';
import RestaurantList from './components/RestaurantList';

const moods = [
    { mood: 'Survived a Week from Hell'},
    { mood: 'Series Finale Supper'},
    { mood: 'Fitbit Resuscitation Feast'},
    { mood: 'Post-Catastrophic Presentation Dinner'},
    { mood: 'WFH Rendezvous'},
    { mood: 'TGIF Food Coma'},
    { mood: 'Spring Cleaning Celebration'},
    { mood: 'Avoiding Retrograde Drama'},
    { mood: 'Post-Role Play Romance'},
    { mood: 'Thirst Trap Dinner'},
    { mood: 'Sibling Rivalry Supper'},
    { mood: 'Divorce Party'},
    { mood: 'Team Building Dinner for You and Yourself'},
    { mood: 'Lost The Will To Cook'},
    { mood: 'Bestie’s in Town'},
    // { mood: '#BoycottLoblaws'},
];

const Home = ({ onMoodSelect }) => (
    <div className="app">
        <header className="header">
            <h1>Feast on This</h1>
            <h2>Discover top-rated restaurants based on the occasion</h2>
            <h3>Site by <a href="https://www.brittneyramsubick.ca/" target="_blank" rel="noopener noreferrer">Brittney Ramsubick</a></h3>
        </header>
        <div className="mood-buttons">
            {moods.map(({ mood, emoji }) => (
                <MoodButton key={mood} mood={mood} emoji={emoji} onClick={() => onMoodSelect(mood)} />
            ))}
        </div>
    </div>
);

const App = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const navigate = useNavigate();

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
        navigate('/restaurants');
    };

    const handleEditMood = () => {
        setSelectedMood(null);
        navigate('/');
    };

    return (
        <Routes>
            <Route path="/" element={<Home onMoodSelect={handleMoodClick} />} />
            <Route path="/restaurants" element={<RestaurantList mood={selectedMood} onEditMood={handleEditMood} />} />
        </Routes>
    );
};

export default App;

