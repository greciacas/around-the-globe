import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp(props) {
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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData)
    }}>
      <h2>Sign Up</h2>
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
      <h4>Already have an account? <Link to='/login'>Sign In</Link></h4>
      <button>Submit</button>
    </form>
  )
}