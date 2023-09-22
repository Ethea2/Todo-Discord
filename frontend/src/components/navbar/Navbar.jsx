import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-start p-10'>
      <div className=" navbar bg-secondary w-[90%] rounded-xl z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Patty's Todos</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                Today
              </Link>
            </li>
            <li>
              <Link to="/todos">
                Todos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar