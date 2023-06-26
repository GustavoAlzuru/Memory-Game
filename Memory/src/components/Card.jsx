import React from 'react';
import './Card.css'
import pokeball from '../images/pokeball.webp'
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
                <img src={pokeball} alt='pokeball' className='img-pokeball' onClick={handleClick}/>
            </div>
        </div>
    );
}

export default Card;
