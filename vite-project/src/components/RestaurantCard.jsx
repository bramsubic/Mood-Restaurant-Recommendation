import React from 'react';

const RestaurantCard = ({ restaurant, onHide, onNext }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-header">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p>{restaurant.rating} / 5</p>
            </div>
            <div className="restaurant-actions">
                <button onClick={onHide}>🙈 HIDE</button>
                <button onClick={onNext}>NEXT 🚗</button>
            </div>
        </div>
    );
};

export default RestaurantCard;
