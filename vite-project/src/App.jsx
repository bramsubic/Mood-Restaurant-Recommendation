import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MoodButton from './components/MoodButton';
import RestaurantList from './components/RestaurantList';

const moods = [
    { mood: 'CHEERFUL', emoji: '😄' },
    { mood: 'REFLECTIVE', emoji: '🤔' },
    { mood: 'GLOOMY', emoji: '😔' },
    { mood: 'HUMOROUS', emoji: '😂' },
    { mood: 'MELANCHOLY', emoji: '😢' },
    { mood: 'IDYLLIC', emoji: '😊' },
    { mood: 'CHILL', emoji: '😎' },
    { mood: 'ROMANTIC', emoji: '🥰' },
    { mood: 'WEIRD', emoji: '😜' },
    { mood: 'HORNY', emoji: '😏' },
    { mood: 'FEARFUL', emoji: '😱' },
    { mood: 'LONELY', emoji: '😭' },
    { mood: 'THRILL-SEEKING', emoji: '😲' },
    { mood: 'PLAYFUL', emoji: '😋' },
    { mood: 'SLEEPY', emoji: '😴' },
    { mood: 'ANGRY', emoji: '😡' },
    { mood: 'TENSE', emoji: '😬' },
    { mood: 'THOUGHTFUL', emoji: '🤓' },
];

const Home = ({ onMoodSelect }) => (
    <div className="app">
        <header className="header">
            <h1>Mood2Restaurant</h1>
            <h2>Discover top-rated restaurants based on your mood</h2>
            <p>How are you feeling now?</p>
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

