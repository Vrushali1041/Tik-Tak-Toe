import React, { useState } from "react";
import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let tikArray = new Array(9).fill("");
// let tikArray = ["cross", "circle", "cross", "circle", "cross", "circle", "cross", "circle", "cross"]
// console.log(tikArray);

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMsg, setwinMsg] = useState("")

    // PlayAgain
    const playAgain = () => {
        tikArray.fill("")
        setIsCross(true)
        setwinMsg("")
    }

    // FindWinner
    const findWinner = () => {
        // row 1
        if (tikArray[0] == tikArray[1] && tikArray[0] == tikArray[2] && tikArray[0] != "") {
            setwinMsg(tikArray[0]+ " has won")
        }

        // row 2
        else if (tikArray[3] == tikArray[4] && tikArray[3] == tikArray[5] && tikArray[3] != "") {
            setwinMsg(tikArray[3]+ " has won")
        }

        // row 3
        else if (tikArray[6] == tikArray[7] && tikArray[6] == tikArray[8] && tikArray[6] != "") {
            setwinMsg(tikArray[6]+ " has won")
        }

        // column 1
        else if (tikArray[0] == tikArray[3] && tikArray[0] == tikArray[6] && tikArray[0] != "") {
            setwinMsg(tikArray[0]+ " has won")
        }

        // column 2
        else if (tikArray[1] == tikArray[4] && tikArray[1] == tikArray[7] && tikArray[1] != "") {
            setwinMsg(tikArray[1]+ " has won")
        }

        // column 3
        else if (tikArray[2] == tikArray[5] && tikArray[2] == tikArray[8] && tikArray[2] != "") {
            setwinMsg(tikArray[2]+ " has won")
        }

        // diagonal 1
        else if (tikArray[0] == tikArray[4] && tikArray[0] == tikArray[8] && tikArray[0] != "") {
            setwinMsg(tikArray[0]+ " has won")
        }

        // diagonal 2
        else if (tikArray[2] == tikArray[4] && tikArray[2] == tikArray[6] && tikArray[2] != "") {
            setwinMsg(tikArray[2]+ " has won")
        }

        // draw condition
        else if(tikArray.indexOf("") == -1){
            setwinMsg("Draw")
        }

    }

    // changeItem
    const changeItem = (index) => {
        if(winMsg){
            return toast("Game has been already over")
        }

        if (tikArray[index] != "") {
            return toast("Open your eyes dude where are you tapping")
        }
        else if (tikArray[index] == "") {
            tikArray[index] = isCross == true ? "cross" : "circle";
            setIsCross(!isCross)
            findWinner()
        }
    }

    const getKey = () =>{
        return Date.now().toString()
    }

    return (
        <div>
            <ToastContainer position="bottom-center" />
            {
                winMsg != "" ? (
                    <div>
                        <h1>{winMsg.toUpperCase()}</h1>
                        <button onClick={playAgain}> Play Again</button>
                    </div>
                )
                    :
                    (<h1> Chance is of {isCross ? "Cross" : "Circle"}</h1>)
            }

            {/* disignPart */}
            <div className="grid">
                {
                    tikArray.map((value, index) => (
                        <div key={index} className="box" onClick={()=>changeItem(index)}> 
                        <Icon ic={value} /></div>
                    ))
                }
            </div>


        </div>
    )
}

export default App;

