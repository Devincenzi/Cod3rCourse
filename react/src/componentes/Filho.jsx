import React from "react";
import { ChildrenWithProps } from "../utils/Utils";

export default props => 
    <div>
        <li>{props.nome} {props.sobrenome}</li>
        <ul>
            <li>{ChildrenWithProps(props)}</li>
        </ul>
    </div>