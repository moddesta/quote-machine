import React from 'react';
import './QuoteBox.css'; 

const Button = ({ color, buttonDisplayName, clickHandler }) => {
return <button 
            style={{ backgroundColor: color }} 
            onClick={clickHandler}>
            
            {buttonDisplayName}
        </button>
}

export default Button;