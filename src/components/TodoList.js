import React from 'react'
import Todo from './Todo';


export default function TodoList({todoList, onBtnCheck}) {
  return (
      <>
        {
            todoList.map(todo => <Todo key={todo.id} onBtnCheck={onBtnCheck} todo={todo} />)
        }
      </>
    )
}
