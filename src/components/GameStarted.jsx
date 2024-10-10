import RoleDice from "./RoleDice"
import {useEffect, useState} from "react"
import Rules from "./Rules"
function GameStarted(){
    const arr=[1,2,3,4,5,6]
    const [number,setNumber]=useState()
    const [currentDice,setCurrentDice]=useState(1)
    const [score,setScore]=useState(0)
    const [showRules,setShowRules]=useState("Show Rules")
    const [error,setError]=useState("")
    
    
    
    console.log("current dice from gameStarted.jsx = ",currentDice)
    console.log("number from gameStarted.jsx = ",number)
    return(
        <>
        <div className="w-[100vw] h-[20vh] flex ">
            <div className="w-[30%] h-[100%]  flex flex-col items-center justify-center ">
                <h1 className="text-7xl font-bold">{score}</h1>
                <p className="text-2xl ">Total Score</p>
            </div>
            <div className="w-[70%] h-[100%]  flex flex-col items-end p-6  ">
            <div className="flex gap-3">
                {
                    arr.map((val,i)=>{
                        return <button key={i}   className={ number===val ? "border border-black p-4 text-2xl  bg-black text-white" :"border border-black p-4 text-2xl hover:bg-black hover:text-white"} onClick={()=>{setNumber(val)}}>{val}</button>
                    })
                }
            </div>
            <br></br>
            <div>
            <p className="text-xl text-red-700">{error}</p>
            <h2 className="text-xl font-semibold">Select Number</h2>
            </div>
            </div>

        </div>
        <div className="w-[100vw] h-[80vh] flex justify-center items-center">
            <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} score={score} setScore={setScore} number={number} setNumber={setNumber} setError={setError}  showRules={showRules} setShowRules={setShowRules}/>
        </div>
        {
            showRules === "Hide Rules" ? (
                <div className="w-[100vw] h-[30vh] flex justify-center">
            <Rules/>
            <br></br>
            </div>
            ):("")
            
        
        }
        
        </>
    )
}
export default GameStarted