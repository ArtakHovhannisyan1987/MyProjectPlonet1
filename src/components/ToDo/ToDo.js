import "./ToDo.css";

function ToDo({todo, togglrTask, removeTask}){

    return (
        <div key={todo.id}>
            <div className={todo.complete ? "strike" : "item-text"}
            onClick={()=>togglrTask(todo.id)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() =>removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}
export default ToDo;