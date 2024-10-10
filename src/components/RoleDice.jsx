import { useState } from "react"
import dice1 from "./images/dice_1.png"
import dice2 from "./images/dice_2.png"
import dice3 from "./images/dice_3.png"
import dice4 from "./images/dice_4.png"
import dice5 from "./images/dice_5.png"
import dice6 from "./images/dice_6.png"

function RoleDice({currentDice,setCurrentDice,score,setScore,number,setNumber,setError,showRules,setShowRules}){
    
    const arr=[dice1,dice2,dice3,dice4,dice5,dice6]
    const generatedNumber=function getRandom(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    }
    function displayError(){
        if(!number){
            setError("number is required ! ")
        }else{
            setError("")
        }
    }
    
    function roleDice(){

        const randomDice=generatedNumber(1,7)
        setCurrentDice((prev)=>randomDice)
        if(number===randomDice){
            setScore(score+randomDice)
        }else{
            setScore(score-2)
        }
        setNumber()
    }
    
    console.log(currentDice)
    return(
        <>
        <div className=" w-[20%]">
            <div className="w-[100%] flex justify-center" onClick={!number ? displayError : roleDice} >
            <img src={arr[currentDice-1]} alt="somethinf" onClick={()=>increaseScore(randomDice)} />
            </div>
            
            <h1 className="text-xl text-center font-semibold mt-4">Click To Dice Roll</h1>
            <button className="text-xl border border-black w-[100%] mt-4 p-2" onClick={()=>{setScore(0)}}>Reset Score</button>
            <button className="text-xl border border-black bg-black w-[100%] hover:bg-white hover:text-black  text-white mt-4 p-2" onClick={()=>{
                showRules==="Show Rules" ? setShowRules("Hide Rules") : setShowRules("Show Rules")
            }}>{showRules}</button>
            
        </div>
        </>
    )
}
export default RoleDice