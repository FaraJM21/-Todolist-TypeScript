import { TodoListInterFace } from '../Types/interface'
import TodoItem from './TodoItem'


const TodoList: React.FC<TodoListInterFace> = (props) => {
    return (

        <section className="itemContent">
            {props.todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo}
                    removeTodo={props.removeTodo}
                    editedTodo={props.editedTodo}
                    completedTodo = {props.completedTodo}
                />
            })}
        </section>
    )


}

export default TodoList

