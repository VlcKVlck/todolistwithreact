import './App.css';

import {NavBar} from "./pages/NavBar";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import {AuthContext} from "./providers/auth-context";



function App() {
    const [currentUser,setCurrentUser ] = useState(null)
    const userObject = {currentUser,setCurrentUser}

    return(
        <>
        <AuthContext.Provider value={userObject}>
            <NavBar/>
            <Outlet/>
        </AuthContext.Provider>
        </>
    )
}

export default App;
