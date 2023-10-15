import React from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'

const dummyTodos = [
    {
        id : 1,
        title : "Todo title 1",
        desc : "Todo 1 description"
    },
    {
        id : 2,
        title : "Todo title 2",
        desc : "Todo 2 description"
    },
    {
        id : 3,
        title : "Todo title 3",
        desc : "Todo 3 description"
    }
]

export default function Home() {
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <NewTodo />
      <Todos todos={dummyTodos}/>
    </div>
  )
}
