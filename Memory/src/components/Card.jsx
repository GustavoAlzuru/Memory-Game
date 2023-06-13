import React from 'react';
import './Card.css'
const Card = ({ pokemon, compare, flipped, disabled }) => {
    
    const handleClick = () => {
        if(!disabled){
            compare(pokemon)
        }
    }

    return (
        <div className='card-container'>
            <div className={flipped ? 'flipped' : ''}>
                <img src={pokemon?.image} alt="pokemon image" className='img-pokemon'/>
                <img src='https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png' alt='pokeball' className='img-pokeball' onClick={handleClick}/>
            </div>
        </div>
    );
}

export default Card;
