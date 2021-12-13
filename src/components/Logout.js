import userService from "../services/user-service";


function Logout() {

    const logout = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
        }
    }

    return (
        <button type="button" className="btn btn-secondary" onClick={logout}>
            Logout
        </button>
    )
}

export default Logout;