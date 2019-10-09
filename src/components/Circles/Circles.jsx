import React from 'react'
import './Circles.css'

const Circles = (props) => {
    return (
        <div className="Circles">
            <div 
                className="div"
                className={props.selectedButton === "Button 1" ? "selected" : "null"} 
            >
                1
            </div>
            
            <div 
                className="div"
                className={props.selectedButton === "Button 2" ? "selected" : "null"} 
            >
                2
            </div>
            
            <div 
                className="div"
                className={props.selectedButton === "Button 3" ? "selected" : "null"} 
            >
                3
            </div>
            
            <div 
                className="div"
                className={props.selectedButton === "Button 4" ? "selected" : "null"} 
            >
                4
            </div>
        </div>
    )
}

export default Circles
