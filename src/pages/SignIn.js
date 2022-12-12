import {useContext, useRef} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../providers/auth-context";
import { useNavigate } from 'react-router-dom';

export function SignIn(){
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    const userName = useRef();
    const password = useRef();
    let navigate = useNavigate();

    function handleSubmit() {
        const sigInInfo = {
          email: userName.current.value,
          password: password.current.value,
        }

    //todo: go to api and sign in with the info above
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then( response => response.json())
            .then((user) => {
              setCurrentUser(user);
              navigate('/todolist')
            })
  }

    return (
        <form>
            <input type="text" placeholder="User Name" ref={userName}/>
            <input type="password" placeholder="****" ref={password}/>
             <button type="button" className="btn btn-outline-primary me-2" onClick={handleSubmit}>Login</button>
        </form>
    )
}


// <Link to={'../todolist'}>