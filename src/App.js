import "./App.css";
import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback } from "react";
import {v4} from 'uuid'

function App() {
  //state, props
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState('')

  const onTextInputChange = useCallback(e => {
    setTextInput(e.target.value)
  })

  const onAddTodoClick = useCallback(e =>{
    //them text Input vào todolist
    setTodoList([
      {id:v4(), name: textInput, isCompleted: false},
      ...todoList
    ]);

    setTextInput('')
  },[textInput]);

  const onCheckBtn = useCallback((id)=>{
    setTodoList(prevState => prevState.map(todo=>todo.id ===id ? {...todo, isCompleted: !todo.isCompleted } :  todo))
  })

  return (
    <div>
      <h2>Todo List</h2>
      <Textfield
        name="add-todo"
        placeholder="Add todo..."
        elemAfterInput={
          <Button isDisabled={!textInput}
            appearance="primary"
            onClick={onAddTodoClick}
          >
            Add
          </Button>
        }
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>

      <TodoList onBtnCheck={onCheckBtn} todoList={todoList}/>
    </div>
  );
}

export default App;
