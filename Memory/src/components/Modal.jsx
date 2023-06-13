import React from 'react';
import './Modal.css'

const Modal = ({ shuffleCards }) => {
    const handleClick = () => {
        shuffleCards()
    }
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h3>You won</h3>
                <button onClick={handleClick}>Play Again</button>
            </div>
        </div>
    );
}

export default Modal;
