import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoItemInterFace } from "./Types/interface";
import "./sass/style.scss"



function App() {

  const [todos, setTodos] = useState<TodoItemInterFace[]>([]);

  const addTodo = (todoText: string) => {
    setTodos([...todos,
    {
      id: Math.floor(Math.random() * 100) + 1,
      text: todoText,
      isComplete: false
    }
    ])
  }

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const editedTodo = (todoId: number, newText: string) => {
    
    
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.text = newText
      }
      return todos;
    })

  }

  const completedTodo = (todoId: number) => {
    
    
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.isComplete = true
      }
      return todos
    })



  }



  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} editedTodo={editedTodo} completedTodo={completedTodo} />
    </>
  )
}

export default App