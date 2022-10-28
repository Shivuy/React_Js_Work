import React from "react";
import './App.css';
import myStyles from './Sample.module.css'

let fontColor:any = {
    color:'blue', backgroundColor : 'yellow',
    fontSize : '20px',
    padding: '10px',
    fontWeight:'bold'
};

let ColorComponent = () => {
    return (
        <>
        <input type='text' value='some bvalue in blue' style = {fontColor}/>
        <input type='text' value='Css Class style without DataBinding' className = 'Sample' />
        <input type='text' value ='CSS slass style with Data Binding. This requires a file called .modile.css' className={myStyles.boxStyle}/>
        </>
    )
}

export default ColorComponent