export interface TodoItemInterFace {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoListInterFace {
  todos: TodoItemInterFace[];
  removeTodo:(todoId:number) => void;
  editedTodo:(todoId:number, newText:string) => void
  completedTodo:(todoId:number) => void;
}

export interface TodoFormInterFace {
  addTodo: (todoText: string) => void;
}
