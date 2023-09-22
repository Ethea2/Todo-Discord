import Homepage from "../../pages/Homepage"
import Today from "../../pages/Today"
import Todos from "../../pages/Todos"

const routes = [
    // {path: '/', element: <Homepage />},
    {path: '/todos', element: <Todos />},
    {path: '/', element: <Today /> }
]

export default routes