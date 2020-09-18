import React from 'react';

import './Button.css';

const Button = (props) =>{
    return(
        <button className="Button" onClick={props.onClick}>
            <span>{props.text}</span>
        </button>
    )

}

export default Button;