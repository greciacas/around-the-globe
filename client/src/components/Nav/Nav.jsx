import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='home-link'><h1>Around the Globe</h1></Link>
        <Link to='/login'>Sign In</Link>
        <Link to='/register'>Sign Up</Link>
      </div>
    </nav>
  )
}
