import useFetch from '../hooks/useFetch'
import Todo from '../components/todos/Todo'
import { TodoType } from '../types/todos'

const Today = () => {
    const {data: todos} = useFetch('/todo/today')
    return (
        <div className='flex flex-col justify-start items-center gap-5 p-10 md:px-20'>
            {
                todos?.map((todo: TodoType, index: number) => (
                    <Todo todo={todo} key={index}/>
                ))
            }
        </div>
    )
}

export default Today