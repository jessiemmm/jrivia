import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import triviaService from "../services/trivia-service";
import Question from "./Question/Question"
import Navbar from "./NavBar/index";

function Details() {
    const { id } = useParams();

    const [trivia, setTrivia] = useState([])

    

    useEffect(() => {
        triviaService.findTriviaById(id).then(res => setTrivia(res[0]))
        console.log(trivia)
    }, [id])

    const renderQuestion = () => {
        if(trivia.length !== 0) {
            return (<Question trivia={trivia} />)
        }
    }

    return (
        <div>
            <Navbar />
            <br />
            {renderQuestion()}
            <div className="container">
                <h1>More Details</h1>
                <p>Owner Of Question: <a href={`/profile/${trivia.question_owner}`}>{trivia.question_owner}</a></p>
                <p>Category: {trivia.category}</p>
                <p>Correct Count: {trivia.correct_count}</p>
                <p>Incorrect Count: {trivia.incorrect_count}</p>

                
            </div>
            

        </div>
    )
}

export default Details;