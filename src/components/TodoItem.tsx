import { TodoItemInterFace } from '../Types/interface'
import { TiDelete } from "react-icons/ti";
import { MdOutlineDoneOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { useState } from 'react';

interface Props {
  todo: TodoItemInterFace
  removeTodo: (todoId: number) => void;
  editedTodo: (todoId: number, newText: string) => void
  completedTodo: (todoId: number) => void;
}

function TodoItem(props: Props) {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(props.todo.text);
  const [isComplete, setIsComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value)
  }

  const editText = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === "Enter") {
      props.editedTodo(id, newText)
      setEdit(false)
    }
  }


  const completed = (id: number) => {
    setIsComplete(true)
    props.completedTodo(id)
  }

  return (

    <div className={isComplete ? "completed" : 'itemBox'}>
      <h2 style={{ display: edit ? "none" : "block" }}>{props.todo.text}</h2>
      <input
        style={{ display: edit ? "block" : "none" }}
        type="text"
        value={newText}
        onChange={handleChange}
        onKeyDown={(e) => editText(e, props.todo.id)}
      />
      <div className="tools">
        <i id='complete' onClick={() => completed(props.todo.id)}><MdOutlineDoneOutline /></i>
        <i id="edit" onClick={() => setEdit(!edit)}><MdOutlineModeEditOutline /></i>
        <i id='deleteItem' onClick={() => props.removeTodo(props.todo.id)}><TiDelete /></i>
      </div>

    </div>



  )
}

export default TodoItem