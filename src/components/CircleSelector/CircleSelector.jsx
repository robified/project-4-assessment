import React from 'react'
import './CircleSelector.css'

const CircleSelector = (props) => {
    
    const handleChange = (event) => {
        props.handleClick(event.target.value)
    };
    
    return (
        <div className="CircleSelector">
            <button 
                className={props.selectedButton === "Button 1" ? "selected" : "null"} 
                onClick={handleChange}
                value="Button 1"
            >
                {props.selectedButton === "Button 1" ? "CIRCLE SELECTED 1" : "SELECT CIRCLE 1"}
            </button>
            
            <button 
                className={props.selectedButton === "Button 2" ? "selected" : "null"} 
                onClick={handleChange}
                value="Button 2"
            >
                {props.selectedButton === "Button 2" ? "CIRCLE SELECTED 2" : "SELECT CIRCLE 2"}
            </button>
            
            <button 
                className={props.selectedButton === "Button 3" ? "selected" : "null"} 
                onClick={handleChange}
                value="Button 3"
            >
                {props.selectedButton === "Button 3" ? "CIRCLE SELECTED 3" : "SELECT CIRCLE 3"}
            </button>
            
            <button 
                className={props.selectedButton === "Button 4" ? "selected" : "null"} 
                onClick={handleChange}
                value="Button 4"
            >
                {props.selectedButton === "Button 4" ? "CIRCLE SELECTED 4" : "SELECT CIRCLE 4"}
            </button>
        </div>
    )
}

export default CircleSelector;