import './SignIn.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {IoArrowForwardSharp} from 'react-icons/io5'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='outer-div'>
    <form className='sign-in' onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData)
    }}>
      <h2>Sign In</h2>
      <label>Username:
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>Password:
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
      </label>
      <br/>
        <h4>Don't have an account? <IoArrowForwardSharp/> <Link to='/register'>Sign Up</Link></h4>
      <button className='submit-sign-in'>Submit</button>
      </form>
      </div>
  )
}
