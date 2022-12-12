import {ListPageHeader} from "../components/ListPageHeader";
import {useContext} from "react";
import {AuthContext} from "../providers/auth-context";

export function ToDoList (){
    return (// list header calls for lists. the lists page renders new lists.
        <ListPageHeader />
    )
}
