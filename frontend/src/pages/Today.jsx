import React from 'react'
import useFetch from '../hooks/useFetch'
import Todo from '../components/todos/Todo'

const Today = () => {
    const {data: todos} = useFetch('/todo/today')
    return (
        <div className='flex flex-col justify-start items-center gap-5 p-10'>
            {
                todos?.map((todo, index) => (
                    <Todo todo={todo} key={index}/>
                ))
            }
        </div>
    )
}

export default Today