import dices from "../assets/dices.png"
import Starting from "./Starting"
function Home({toggle}){
    return(
        <>
        <div className="w-[100vw] h-[100vh] flex  items-center">
            <div className="w-[50%] h-[50%]">
            <img src={dices} alt="" />
            </div>
            <div className="w-[50%] h-[50%] flex flex-col justify-center gap-5 ">
            <h1 className="text-8xl font-bold">DICE GAME</h1>
            <div className="flex justify-center">
            <button className="bg-black text-white font-bold text-xl p-2 rounded-md w-[25%]" onClick={toggle} >Play Now</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home