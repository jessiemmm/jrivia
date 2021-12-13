import './index.css'
import NavBar from "../NavBar";

function Privacy() {
    return (
        <>
            <NavBar/>
        <div className="body">
            <h2>Privacy Policy</h2>
            <p>We protect your information by encrypting your passwords.</p>
            <p>As a safety measure, we recommend you use an uncommon username and password combination.</p>
        </div>
        </>

    )
}
export default Privacy;