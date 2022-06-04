import React from "react";
import './Header.css';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h2 className="mt3"><i className={`fa fa-${props.icon}`}></i> {props.title} </h2>
        <p className="lead text-mute">{props.subtitle}</p>
    </header>