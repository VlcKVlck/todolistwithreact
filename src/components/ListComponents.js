import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListToggleAll from './ListToggleAll';
import List from './List'
import ToDoLogic from '../logic/ToDoLogic'
import {ListContext} from "../providers/list-context";
import {AuthContext} from "../providers/auth-context";
import {UserAuth} from "../logic/UserAuth";
import {ListPageHeader} from "./ListPageHeader";


export default function ListComponents({appName}){
    const logic = ToDoLogic();
    const user = UserAuth ();

    return (
        <AuthContext.Provider value={user}>
        <ListContext.Provider value={logic}>
        <section className="todoapp">
            <ListHeader appName={appName} />
            <ListToggleAll >
                <List  />
            </ListToggleAll>
            <ListFooter />
        </section>
        </ListContext.Provider>
        </AuthContext.Provider>
    )
}