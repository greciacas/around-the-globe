import './Nav.css';
import { Link, NavLink } from 'react-router-dom';

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
        <Link to='/' className='home-link'><h1>Around the Globe</h1></Link>
        {currentUser ? authenticated : unathenticated}
      </div>
    </nav>
  )
}
