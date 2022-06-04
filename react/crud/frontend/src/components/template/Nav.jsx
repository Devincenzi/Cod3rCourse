import React from "react";
import NavItem from "./NavItem";
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link='/' icon='home' label='Início'/>
            <NavItem link='/users' icon='users' label='Usuários'/>
            {/* <a href="#/"><i className="fa fa-home"> Início</i></a>
            <a href="#/users"><i className="fa fa-users"> Usuários</i></a> */}
        </nav>
    </aside>