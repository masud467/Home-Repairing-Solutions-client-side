import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo1.png";
const NavBar = () => {
  const navLink = (
    <>
      <NavLink to='/'>
      <li>
        <a>Home</a>
      </li>
      </NavLink>
      <NavLink to='/allServices'>
      <li>
        <a>All Services</a>
      </li>
      </NavLink>

      
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img className="w-20 h-20" src={logo} alt="" />
          <a className=" text-xl">
            Home Repairing
            <br />
            Solutions
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
            
          <Link to='/login'><a className="mr-1 btn btn-outline">LogIn</a></Link>
          <Link to='/register'><a className="btn btn-outline">Register</a></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
