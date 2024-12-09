import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Components/Providers/AuthProvider";

const Navbar = () => {
  const {user,SignOut}=useContext(authContext);
  const handleSignOut=()=>{
    SignOut()
    .then(()=>console.log('User LogOut successfully'))
        .catch(error=>console.log(error))
  }
    const links=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/About">About</NavLink></li>
    <li><NavLink to="/CarrerPage">Career</NavLink></li>
    
    </>
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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    <div>
    {
        user ? 
      <NavLink onClick={handleSignOut} className='px-5 py-2 border rounded-lg bg-gray-100'>Sign Out</NavLink>
      :
      <NavLink to="/Register" className='px-5 py-2 border rounded-lg bg-gray-100'>Sign In</NavLink>
    }
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;