import React, { useState } from "react";
import Icon from "./Components/Icon";

let tikArray = new Array(9).fill("");

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMsg, setwinMsg] = useState("")

    // PlayAgain
    const playAgain = () =>{
        tikArray.fill("")
        setIsCross(true)
        setwinMsg("")
    }

    // FindWinner
    const findWinner = () =>{
        // row 1
        if(tikArray[0] == tikArray[1] && tikArray[0] == tikArray[2] && tikArray[0] != ""){
            setwinMsg(tikArray[0], "his won")
        }

        // row 2
        else if(tikArray[3] == tikArray[4] && tikArray[3] == tikArray[5] && tikArray[3] != ""){
            setwinMsg(tikArray[3], "his won")
        }

         // row 3
         else if(tikArray[6] == tikArray[7] && tikArray[6] == tikArray[8] && tikArray[6] != ""){
            setwinMsg(tikArray[6], "his won")
        }

         // column 1
         else if(tikArray[0] == tikArray[3] && tikArray[0] == tikArray[6] && tikArray[0] != ""){
            setwinMsg(tikArray[0], "his won")
        }

        // column 2
        else if(tikArray[1] == tikArray[4] && tikArray[1] == tikArray[7] && tikArray[1] != ""){
            setwinMsg(tikArray[1], "his won")
        }

        // column 3
        else if(tikArray[2] == tikArray[5] && tikArray[2] == tikArray[8] && tikArray[2] != ""){
            setwinMsg(tikArray[2], "his won")
        }

        // diagonal 1
        else if(tikArray[0] == tikArray[4] && tikArray[0] == tikArray[8] && tikArray[0] != ""){
            setwinMsg(tikArray[0], "his won")
        }

        // diagonal 2
        else if(tikArray[2] == tikArray[4] && tikArray[2] == tikArray[6] && tikArray[2] != ""){
            setwinMsg(tikArray[2], "his won")
        }

    }

    const changeItem = (index) =>{
        if(tikArray[index] != ""){
            console.log("already filled");
        }
        else if(tikArray[index] == ""){
            tikArray[index] = isCross == true ? "cross" : "circle";
        }
    }

    return (
        <div>
            <Icon />
        </div>
    )
}

export default App;

