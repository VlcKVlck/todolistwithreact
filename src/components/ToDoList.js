import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import List from './List'
import ToDoLogic from '../logic/ToDoLogic'
import {ListContext} from "../providers/list-context";
import {AuthContext} from "../providers/auth-context";
import {UserAuth} from "../logic/UserAuth";


export default function ToDoList({appName}){
    const logic = ToDoLogic();
    const user = UserAuth ();

    return (
        <AuthContext.Provider value={user}>
        <ListContext.Provider value={logic}>
        <section className="todoapp">
            <Header appName={appName} />
            <Main >
                <List  />
            </Main>
            <Footer />
        </section>
        </ListContext.Provider>
        </AuthContext.Provider>
    )
}