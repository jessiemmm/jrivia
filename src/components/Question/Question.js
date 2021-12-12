import {useEffect, useState} from "react"
import "./Question.css"

function Question({trivia}) {

    const [selected, setSelected] = useState("");

    const options = trivia.incorrect_answers.concat(trivia.correct_answer);
    const [shuffledOptions, setShuffledOptions] = useState(options);
    useEffect(() => {
         setShuffledOptions(options.sort((a, b) => 0.5 - Math.random()));
    }, [])

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
        
        <div className="container" id="question-container">
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
                shuffledOptions.map((v) => {
                    return(
                        <p><input type="radio" name={trivia._id} value={v} onChange={event=> setSelected(event.target.value)}/>{v}</p>
                    )
                })}
            </div>
            
            {renderSubmit()}
            
        </div>
        
    )
}

export default Question;