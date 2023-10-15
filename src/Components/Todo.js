import React from 'react'
import style from './Todo.module.css'
export default function Todo(props) {
    const {title, desc}=props.todo
  return (
    <article className={style.todo}>
        <div className={style.todo}>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div>
            <buttom className={style.btn}>
                <i className='fa fa-trash fa-2x'></i>
               
            </buttom>
        </div>
    </article>
  )
}
