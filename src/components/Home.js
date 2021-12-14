import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import CreateTrivia from "./CreateTrivia";
import Question from "./Question/Question";
import NavBar from "./NavBar";

function Home(props) {
    const user = localStorage.getItem("user");
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        service.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    });

    const renderCreate = () => {
        if(user && JSON.parse(user).user_type === "moderator") {
            return (<CreateTrivia/>)
        }
    } 
    
    return (
        <div>
            <div style={{position:"sticky", top:"0", zIndex:"100"}} >
                <NavBar />
            </div>
            
            <br />
            {renderCreate()}
            <div className="home">
                {trivia.map(trivia => {
                    return(<Question key={trivia._id} trivia={trivia} />
                        ) 
                })}
            </div>
        </div>
    );
    
}

export default Home;