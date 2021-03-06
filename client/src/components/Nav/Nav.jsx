import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import { IoEarth } from 'react-icons/io5';
import { GiCommercialAirplane } from 'react-icons/gi';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  const authenticated = (
    <>
      <NavLink to='/profile' className='profile'>PROFILE</NavLink>
      <NavLink to='/' onClick={handleLogout} className='logout'>LOGOUT</NavLink>
    </>
  )

  const unathenticated = (
    <>
      <Link to='/login' className='login'>SIGN IN</Link>
      <Link to='/register' className='register'>SIGN UP</Link>
    </>
  )

  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='home-link'><h1>Around the Globe <GiCommercialAirplane style={{verticalAlign: 'middle'}}/> <IoEarth style={{verticalAlign: 'middle'}}/></h1></Link>
        {currentUser ? authenticated : unathenticated}
      </div>
    </nav>
  )
}
