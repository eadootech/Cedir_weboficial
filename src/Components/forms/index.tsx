import React from "react";
import './styled.scss';


export function Forms(props){

    return(
        
          <form className="forms">
            <label>{props.name}</label>
            <input type="email"></input>
          </form>
    );

};
