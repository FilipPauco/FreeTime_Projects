import React from "react";


export default function Dice(props){
    const styles = {
        backgroundColor: props.isHeld && "#59E391"
    }
    return(
            <div className="dice" style={styles} onClick={props.holdDice}>{props.value}</div>
    )
}