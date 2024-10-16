import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import kanto from '../assets/kanto.png';

const HorizontalCard = ({ image = kanto, title = "Kanto", city = "Ciudad", rating = 4, comments = 10, description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", price = "$300" }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const borderColor = '#96C6D9';
    const titleColor = '#FF4A5A';
    const buttonColor = '#96C6D9';
    const likeColor = '#FF4A5A';

    return (
        <div className="flex flex-col mb-3 md:flex-row bg-white rounded-lg overflow-hidden" style={{ border: `2px solid ${borderColor}` }}>
            {/* Primera Columna: Imagen */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-2">
                <img src={image} alt={title} className="object-contain rounded-lg" />
            </div>

            {/* Segunda Columna: Información */}
            <div className="w-full md:w-1/10 p-4 flex flex-col justify-between">
                <div>
                    <h4 className="text-xl" style={{ color: titleColor }}>{title} <span className="text-gray-500">({city})</span></h4>
                    <div className="flex items-center my-2" style={{ color: borderColor }}>
                        <StarRatingComponent 
                            name="rate1"
                            starCount={5}
                            value={rating}
                            renderStarIcon={(index, value) => (
                                <span>
                                    {index <= value ? <FaStar color={borderColor} /> : <FaRegStar color={borderColor} />}
                                </span>
                            )}
                        />
                        <span className="ml-2">({comments} comentarios)</span>
                    </div>
                    <p className="text-gray-700 my-2">{description}</p>
                </div>
                <div className="flex justify-center">
    <button className="w-1/2 py-2 rounded-full mt-4 text-center" style={{ backgroundColor: buttonColor, color: 'white' }}>
        Ver más
    </button>
</div>
            </div>

            {/* Tercera Columna: Like y Precio */}
            <div className="hidden md:flex w-full md:w-1/5 p-4 flex-col justify-between">
    <div className="flex justify-center">
        <div 
            className="p-4 rounded-full cursor-pointer"   
            style={{ 
                backgroundColor: likeColor, 
                border: `2px solid ${likeColor}` 
            }}
            onClick={toggleLike}
        >
            {liked ? <FaHeart color="white" size={24} /> : <FaRegHeart color="white" size={24} />}  
        </div>
    </div>
    <div className="flex justify-center">
        <p className="text-xl font-bold" style={{ color: likeColor }}>{price}</p>   
    </div>
</div>
        </div>
    );
};

export default HorizontalCard;