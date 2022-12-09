
export default function Header(props){
    console.log("header")
    function handleClick (e){
        if (e.key === "Enter"){
            props.addToDo (e.target.value);
            console.log(e.target.value);
            e.target.value ='';
        }
        else{console.log ("other key")}
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <input className="new-todo"
                   placeholder={props.placeholder}
                   onKeyDown={handleClick}
                   autoFocus/>
        </header>
    )

}