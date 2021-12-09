import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import { render } from "@testing-library/react";

function Home(props) {
    
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        service.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    });
    
    return (
        <div className="home">
            {trivia.map(element => {
                return(<p>{element.question}</p>) 
            })}
        </div>
    );
    
}

export default Home;