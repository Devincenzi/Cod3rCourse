import React from "react";
import './Button.css';

export default props => 
    <button onClick={e => {props.click(props.label)}}
        className={`button ${props.classes}`}>
        {props.label}
    </button>