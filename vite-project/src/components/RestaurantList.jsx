import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantsData from '../data';

const RestaurantList = ({ mood, onEditMood }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Filter restaurants based on the selected mood
        const filteredRestaurants = restaurantsData.filter(restaurant => restaurant.mood === mood);
        setRestaurants(filteredRestaurants);
    }, [mood]);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % restaurants.length);
    };

    const handleHide = () => {
        setRestaurants((prev) => prev.filter((_, index) => index !== current));
        setCurrent((prev) => (prev === restaurants.length - 1 ? 0 : prev));
    };

    return (
        <div className="restaurant-list">
            <header>
                <h2>Feeling {mood}</h2>
                <button onClick={onEditMood}>🙃 EDIT MOOD</button>
            </header>
            {restaurants.length > 0 ? (
                <RestaurantCard
                    restaurant={restaurants[current]}
                    onHide={handleHide}
                    onNext={handleNext}
                />
            ) : (
                <p>No restaurants found for this mood.</p>
            )}
        </div>
    );
};

export default RestaurantList;
