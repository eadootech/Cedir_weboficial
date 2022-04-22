import React from "react";
import './styled.scss';


export function Formspassword(props){

    return(
        
          <form className="forms">
            <label>{props.name}</label>
            <input type="password"></input>
          </form>
    );

};
