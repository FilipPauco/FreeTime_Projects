import React from "react";
import Dice from "./Dice"

export default function App(){
    const [dice,setDice] = React.useState(rollDice())
    const [tenzies,setTenzies] = React.useState(false)

    React.useEffect(() => {
        const x = dice.every(dice => dice.isHeld)
        const val = dice[0].value
        const y = dice.every(dice => dice.value === val)
        if(x && y){
            setTenzies(true)
        }
    },[dice])

    function rollDice(){
        let arr = []
        for(let i=0;i<10;i++){
            arr.push({
                value:Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: i
            })
            }
        return arr
    }

    function newDice(){
        if(tenzies){
            setTenzies(false)
            setDice(rollDice())
        }
        else{
            setDice(item => item.map(newD => {
                return newD.isHeld ? newD : {value:Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: newD.id}
            }))
        }
    }

    function holdDice(id){
       setDice(old => old.map(dice => {
        return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
       }))
    }

    const diceComp = dice.map((item) => <Dice value={item.value} isHeld={item.isHeld} holdDice = {() => holdDice(item.id)}/>)
    return(
        <div className="total">
            <div className="text">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls</p>
            </div>
            <div className="main">
                <div className="dices">
                    {diceComp}
                </div>  
             </div>
             { tenzies ? <h1 className="winner">You won</h1> : <h1 className="winner"></h1> }
             <div className="btnClass">
                <button className="btn" onClick={newDice}>{!tenzies ? "Roll Dice" : "New game"}</button>
             </div>
        </div>
    )
}

