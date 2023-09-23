import React, { useState } from 'react'
import { TodoType } from '../../types/todos'

const Todo = ({ todo }: { todo: TodoType }): JSX.Element => {
  const [status, setStatus] = useState(todo.status)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    status === 'ongoing' ? setStatus('done') : setStatus('ongoing')
    let tempStatus = status
    tempStatus === 'ongoing' ? tempStatus = 'done' : tempStatus = 'ongoing'
    fetch(import.meta.env.VITE_API_URL + '/todo', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: tempStatus,
        id: todo._id
      }),
    })

  }

  return (
    <div onClick={handleClick} className={`cursor-pointer card w-full shadow-xl ${status == 'ongoing' ? 'bg-primary' : 'bg-accent'}`}>
      <div className="card-body">
        <p className='font-bold text-xl'>{todo.what}</p>
      </div>
      <div className='card-actions justify-end p-3'>
        <div className='badge badge-outline cursor-pointer'>{status}</div>
      </div>
    </div>
  )
}

export default Todo