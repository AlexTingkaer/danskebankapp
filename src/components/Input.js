import React from 'react';

import './Input.css';

const Input = (props) =>{
    const {
        onChange,
        placeholder,
        value,
        defaultValue,
        style,
        labelText
    } = props;
    const renderLabel = () => {
        if(labelText){
            return(
                <div className="Input-label">{labelText}</div>
            )
        }
        else {
            return <></>
        }
    }
    return(
        <div className="Input" style={style}>
            {renderLabel()}
            <div className="Input-field">
                <input 
                placeholder={placeholder} 
                value={value} 
                defaultValue={defaultValue} 
                onChange={onChange} />
            </div>
        </div>
    )

}

export default Input;