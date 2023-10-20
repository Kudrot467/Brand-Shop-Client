import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const {user, logOut}=useContext(AuthContext);
    const signOut=()=>{
      logOut()
      .then()
      .catch()

    }
    const navLinks= <>
    <li className="mr-2"> <NavLink className="text-lg " style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#52BA5D",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#52BA5D" : "white"

    };}} to="/">Home</NavLink> </li>
    <li className="mr-2"> <NavLink className="text-lg" style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#52BA5D",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#52BA5D" : "white"

    };}} to="/addProduct">Add Product</NavLink> </li>
    <li> <NavLink className="text-lg" style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#52BA5D",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#52BA5D" : "white"

    };}} to="/myCart">My Cart </NavLink> </li>
    
    </>
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
  <a className="btn btn-ghost normal-case text-2xl text-[#52BA5D]">
         Brand shop
        </a>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

  {
    user ? <div className="flex items-center">
      <p className="text-[#AD66D9] text-xl font-semibold">{user.displayName}</p>
      <button onClick={signOut} className="btn bg-[#52BA5D] hover:bg-[#52BA5D] text-white">Log Out</button>
    </div>:<NavLink className="text-lg" style={( {isActive}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        background: isActive ? "white":"#52BA5D",
        textDecoration:isActive ?"underline":"",
        color: isActive ? "#52BA5D" : "white"
  
      };}} to="/login"><button className="btn bg-[#52BA5D] hover:bg-[#52BA5D] text-white">Log In</button></NavLink>
  }

   
  </div>
</div>
  );
};

export default Navbar;
