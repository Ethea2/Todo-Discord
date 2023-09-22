import Todo from './Todo'

const When = ({ when, todos }) => {
    return (
        <div className="card rounded-2xl w-[90%] flex flex-wrap bg-black shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{when}</h2>
                <div className='flex flex-col md:grid md:grid-flow-row md:grid-cols-3 gap-5'>
                    {
                        todos.map((todo, index) => (
                            <Todo key={index} todo={todo}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default When