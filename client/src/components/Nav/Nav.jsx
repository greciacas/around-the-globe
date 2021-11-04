import './Nav.css';
import { Link, NavLink } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  const authenticated = (
    <>
      <NavLink to='/profile'>PROFILE</NavLink>
      <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
    </>
  )

  const unathenticated = (
    <>
      <Link to='/login'>Sign In</Link>
      <Link to='/register'>Sign Up</Link>
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
