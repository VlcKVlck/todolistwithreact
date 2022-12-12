import {Link} from "react-router-dom";

export function Welcome(){

    return (
        <div className ='container'>
            <h1> Welcome</h1>
            <p>Login to see and edit your todo lists</p>
            <Link to={'../signin'}>
                <button type="button" className="btn btn-primary">Sign-in</button> </Link>

        </div>
    )
}