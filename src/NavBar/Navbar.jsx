import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const isHovered = true;

    const navLinks = <>
    <li id="nav" className="hover font-bold"><NavLink id="text" to="/">Home</NavLink></li>
    <li id="nav" className="hover font-bold"><NavLink to="/services">Services</NavLink></li>
      <li id="nav" className="hover font-bold"><NavLink to="/about">About</NavLink></li>
      <li id="nav" className={isHovered ? "hover  font-bold" : "a"}><NavLink to="/more">More</NavLink></li>
    </>
    return (
        <div className="absolute w-full px-0 lg:px-56">
            <div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <h1 className="font-bold text-3xl text-[#ce6eff]">Gaming</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul id="custom-shape" className="menu menu-horizontal px-1 gap-5">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="p-2 rounded-lg bg-transparent font-bold hover:shadow-inner hover:shadow-[#ce6eff] border-2 text-[#ce6eff] border-[#4b04e0] mr-5"><Link to="/login">LogIn</Link></button>
  <label tabIndex={0} className="btn btn-ghost bg-purple-300 hover:bg-purple-500 btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/1MG2ynC/mental-disorder.png" />
        </div>
      </label>
  </div>
</div>
        </div>
    );
};

export default Navbar;