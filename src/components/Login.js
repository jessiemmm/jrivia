import {useState} from "react"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class="container">
            <form>
                <div class="row" id="username-label">
                    <label for="username-input"> username </label>
                </div>
                <div class="row" id="username-input">
                    <input type="text" id="username-input"/>
                </div>
            </form>
        </div>
    )
}

export default Login;