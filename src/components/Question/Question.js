import {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import triviaService from "../../services/trivia-service";
import userService from "../../services/user-service";
import "./Question.css"

function Question({trivia}) {
    const u = JSON.parse(localStorage.getItem("user"));
    const [selected, setSelected] = useState("");
    const [options] = useState(trivia.incorrect_answers.concat(trivia.correct_answer).sort((a, b) => 0.5 - Math.random()));
    const [bookmarkColor, setBookmarkColor] = useState("");

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
            console.log("PLEASE CHOOSE AN ANSWER BEFORE SELECTING");
        } else if (selected === trivia.correct_answer) {
            console.log("CORRECT");
            //update the questions tally and the users tally
        } else {
            console.log("INCORRECT");
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
            return(<button onClick={submit}>submit</button>)
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
        <Link to={`/details/${trivia._id}`} style={{textDecoration: "none"}}>

        
        <div className="container card border-primary" id="question-container">
            <div className="row" id="question-row">
                <div className="col-11">
                    <h3>{trivia.question}</h3>
                </div>
                <div className="col-1">
                    {renderIcon()}
                </div>
                
            </div>
            <div className="container" id="answers-container">
                { // display each option
                options.map((v, i) => {
                    return(
                        <div key={i + "_" + trivia._id}>
                            <input className="btn-check" type="radio" name={trivia._id} id={i + "_" + trivia._id} value={v} onChange={event=> setSelected(event.target.value)} />
                            <label className="btn btn-outline-primary" htmlFor={i + "_" + trivia._id}>{v}</label>
                        </div>
                    )
                })}
            </div>
            
            {renderSubmit()}
            
        </div>
        </Link>
        
    )
}

export default Question;