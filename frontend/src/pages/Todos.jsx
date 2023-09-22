import React from 'react'
import useFetch from '../hooks/useFetch'
import Todo from '../components/todos/Todo'
import When from '../components/todos/When'

const Todos = () => {
  const {data: todos} = useFetch('/todo/sorted')



  return (
    <div className='flex flex-col p-5 justify-start items-center gap-5'>
        {
          todos?.map((day, index) => (
            <When when={day.day} todos={day.todos} key={index}/>
          ))
        }
    </div>
  )
}

export default Todos