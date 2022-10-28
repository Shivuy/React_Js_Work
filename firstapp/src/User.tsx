import React from "react";
import './App.css';


let cssAlignLeft = {marginLeft : '5px'}


export default function User(props:any){
    return (
        <div className="users">
            <img src={props.dp} style={cssAlignLeft}/>
            <hr/>
            <strong>{props.UserName}</strong>
            <br/>
            <strong>{props.Pwd}</strong>
            

        </div>
    )
}