import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink className={({isActive})=>isActive?'active':''} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active':''} to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active':''} to='/todo'>ToDo</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active':''} to='/login'>LogIn</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
