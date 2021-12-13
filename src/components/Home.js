import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import CreateTrivia from "./CreateTrivia";
import Logout from "./Logout";
import Question from "./Question/Question";
import NavBar from "./NavBar";

function Home(props) {
    
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        service.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    });
    
    return (
        <div>
            <div style={{position:"sticky", top:"0", zIndex:"100"}} >
                <NavBar />
            </div>
            
            <p>
                {localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).username : <></>}
            </p>
            <CreateTrivia/>
            <div className="home">
                {trivia.map(trivia => {
                    return(<Question trivia={trivia} />
                        ) 
                })}
            </div>
        </div>
    );
    
}

export default Home;