import {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import triviaService from "../../services/trivia-service";
import userService from "../../services/user-service";
import "./Question.css"

function Question({trivia}) {
    const u = JSON.parse(localStorage.getItem("user"));
    const [border, setBorder] = useState("primary");
    const [selected, setSelected] = useState("");
    const [options] = useState(trivia.incorrect_answers.concat(trivia.correct_answer).sort((a, b) => 0.5 - Math.random()));
    const [bookmarkColor, setBookmarkColor] = useState("");
    const [message, setMessage] = useState("");

    useLayoutEffect(() => {
        if(u) {
            const uFavorites = u.favorite_trivia_ids;
            if(uFavorites.includes(trivia._id)) {
                setBookmarkColor("red");
            }
        }
    }, [trivia._id, u])
    

    const submit= () => {
        if(selected === "") {
            //direct them to select an answer
            setMessage("Please choose an answer first")
        } else if (selected === trivia.correct_answer) {
            //update the questions tally and the users tally
            u.correct_tally += 1;
            trivia.correct_count += 1;
            setBorder("success");
            userService.updateUserTally(u);
            triviaService.updateTriviaTally(trivia);
            localStorage.setItem("user", JSON.stringify(u))
            setMessage("Correct!")
        } else {
            u.incorrect_tally += 1;
            trivia.incorrect_count += 1;
            setBorder("danger");
            userService.updateUserTally(u);
            triviaService.updateTriviaTally(trivia);
            localStorage.setItem("user", JSON.stringify(u))
            setMessage("Incorrect");
        }
    }

    const deleteQuestion = (event) => {
        //call triviaService delete Question
        triviaService.deleteTrivia(trivia._id);
    }

    const favoriteQuestion = () => {
        if(bookmarkColor !== "red"){
            setBookmarkColor("red");
            u.favorite_trivia_ids = [...u.favorite_trivia_ids, trivia._id];
            userService.bookmarkTrivia(u);
            localStorage.setItem("user", JSON.stringify(u))
            console.log(u);
        } else {
            setBookmarkColor("");
            u.favorite_trivia_ids = u.favorite_trivia_ids.filter((id) => {return(id !== trivia._id)})
            userService.bookmarkTrivia(u);
            localStorage.setItem("user", JSON.stringify(u))
            console.log(u);
        }
    }

    const renderSubmit = () => {
        if(localStorage.getItem("user")) {
            return(<button className="btn btn-secondary" id="submit-button" onClick={submit}>submit</button>)
        }
    }

    const renderMessage = () => {
        if(message !== ""){
            return(<p>{message}</p>)
        }
    }

    const renderIcon  = () => {
        if(localStorage.getItem("user")) {
            const u = JSON.parse(localStorage.getItem("user")).user_type;
            
            if(u === "general") {
                return (
                    <i onClick={favoriteQuestion} style={{color: bookmarkColor}} class="fas fa-bookmark fa-2x"></i>
                )
            } else if (u === "moderator") {
                return (
                    <i onClick={deleteQuestion} class="fas fa-trash fa-2x"></i>
                )
            }
        }
    }
    

    return (
        

        
        <div className={`container card border-${border}`} id="question-container">
            <div className="row" id="question-row">
                <div className="col-10">
                    <h3>{trivia.question}</h3>
                </div>
                <div className="col-2">
                    {renderIcon()}
                    <Link to={`/details/${trivia._id}`} style={{textDecoration: "none"}}><button className="btn btn-secondary" style={{float:"right"}}>Details</button></Link>
                </div>
                
            </div>
            <div className="container" id="answers-container">
                { // display each option
                options.map((v, i) => {
                    return(
                        <div key={i + "_" + trivia._id}>
                            <input className="btn-check" type="radio" name={trivia._id} id={i + "_" + trivia._id} value={v} onChange={event=> setSelected(event.target.value)} />
                            <label className={`btn btn-outline-${border}`} htmlFor={i + "_" + trivia._id}>{v}</label>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                <div className="col-1">
                    {renderSubmit()}
                </div> 
                <div className="col">
                    {renderMessage()}
                </div>
            </div>
        </div>
        
        
    )
}

export default Question;