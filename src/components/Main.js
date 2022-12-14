import List from './List'


export default function Main (props){
    function HandleToggleCompletedAll(e){
        props.toggleCompletedAll (e.target.checked);
    }

    return (
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"
            onChange={HandleToggleCompletedAll}/>
            {props.children}
        </section>

    )
}