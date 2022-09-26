import React, { useState } from "react"
import { TodoFormInterFace } from "../Types/interface";

function TodoForm(props: TodoFormInterFace) {
  const [todoText, setTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    props.addTodo(todoText)
    setTodoText("");

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  return (
    <section className="todoSection">
      <h1>Todo List</h1>
        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={handleChange}
          placeholder = 'add todo items'
           />
      </form>

    </section>
    
  )

}

export default TodoForm