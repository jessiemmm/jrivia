import userService from "../services/user-service";


function Logout() {

    const logout = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
        }
    }

    return (
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default Logout;