import useFetch from '../hooks/useFetch'
import When from '../components/todos/When'
import { Days } from '../types/days'

const Todos = () => {
  const { data: todos } = useFetch('/todo/sorted')

  return (
    <div className='flex flex-col p-5 justify-start items-center gap-5'>
      {
        todos?.map((day: Days, index: number) => (
          <When when={day.day} todos={day.todos} key={index} />
        ))
      }
    </div>
  )
}

export default Todos