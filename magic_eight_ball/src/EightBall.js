import React from "react";
import { useState } from "react";
import "./EightBall.css"


function EightBall({ answers }) {
    //generate a random index
    const generateRandomIndex = Math.floor(Math.random() * answers.length);

    //use random index generated and find the answer that matches that index to fetch a random message.
    const generateAnswer = () => answers.find(a => a.msg === answers[generateRandomIndex].msg)

    const [answer, setAnswer] = useState(null);



    const handleButtonClick = () => {
        const newAnswer = generateAnswer();
        setAnswer(newAnswer)
    }

    const restart = () => {
        setAnswer()

    }

    return (
        <>
            <h1 className="eight-ball-title">Magic Eight Ball</h1>
            <div className="eight-ball">
                {!answer ? (
                    <div className="eight-ball-question" onClick={handleButtonClick}>Think of a Question</div>) : (
                    <div className="eight-ball-answer" style={{ backgroundColor: answer.color }} >{answer.msg}
                    </div>
                )
                }
            </div>
                <button className="eight-ball-restart" onClick={restart}>Restart</button>



        </>

    )



}


export default EightBall;
