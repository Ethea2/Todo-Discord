import { Routes, Route } from 'react-router-dom'
import router from './router'

const PageRouter = () => {
  return (
    <Routes>
        {
            router.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
            ))
        }
    </Routes>
  )
}

export default PageRouter