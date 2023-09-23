import Today from "../../pages/Today"
import Todos from "../../pages/Todos"
import { RouteType } from "../../types/routeType"
const routes: Array<RouteType> = [
    // {path: '/', element: <Homepage />},
    {path: '/todos', element: <Todos />},
    {path: '/', element: <Today /> }
]

export default routes