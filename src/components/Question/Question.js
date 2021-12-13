import {useEffect, useState} from "react"
import "./Question.css"

function Question({trivia}) {

    const [selected, setSelected] = useState("");

    const [options] = useState(trivia.incorrect_answers.concat(trivia.correct_answer).sort((a, b) => 0.5 - Math.random()));
    

    const submit= () => {
        if(selected === "") {
            //direct them to select an answer
            console.log("PLEASE CHOOSE AN ANSWER BEFORE SELECTING");
        } else if (selected === trivia.correct_answer) {
            console.log("CORRECT");
            //update the questions tally and the users tally
        } else {
            console.log("INCORRECT");
        }
    }

    const deleteQuestion = () => {
        //call triviaService delete Question
    }

    const favoriteQuestion = () => {
        //call userService update users favorite questions
    }

    const renderSubmit = () => {
        if(localStorage.getItem("user")) {
            return(<button onClick={submit}>submit</button>)
        }
    }

    const renderIcon  = () => {
        if(localStorage.getItem("user")) {
            const u = JSON.parse(localStorage.getItem("user")).user_type;
            
            if(u === "general") {
                return (<p onClick={favoriteQuestion}>favorite icon</p>)
            } else if (u === "moderator") {
                return (<p onClick={deleteQuestion}>delete question</p>)
            }
        }
    }
    

    return (
        
        <div className="container card border-primary" id="question-container">
            <div className="row" id="question-row">
                <div className="col-10">
                    <p>{trivia.question}</p>
                </div>
                <div className="col-2">
                    {renderIcon()}
                </div>
                
            </div>
            <div className="container" id="answers-container">
                { // display each option
                options.map((v, i) => {
                    return(
                        <div>
                            <input className="btn-check" type="radio" name={trivia._id} id={i + "_" + trivia._id} value={v} onChange={event=> setSelected(event.target.value)} />
                            <label className="btn btn-outline-primary" htmlFor={i + "_" + trivia._id}>{v}</label>
                        </div>
                    )
                })}
            </div>
            
            {renderSubmit()}
            
        </div>
        
    )
}

export default Question;