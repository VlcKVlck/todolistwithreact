import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../providers/auth-context";

export function NavBar(){
    const {currentUser} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`welcome`}>My Todo App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"  to={`todolist`}>My todos</Link>
                        </li>
                        {currentUser &&
                            (<li> Hello{currentUser.name}  </li>)}

                    </ul>
                </div>
            </div>
        </nav>
    )
}