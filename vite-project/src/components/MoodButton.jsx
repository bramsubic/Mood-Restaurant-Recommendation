import React from 'react';

const MoodButton = ({ mood, emoji, onClick }) => {
    return (
        <button className="mood-button" onClick={() => onClick(mood)}>
            <span className="emoji">{emoji}</span>
            {mood}
        </button>
    );
};

export default MoodButton;
