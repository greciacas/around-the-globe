import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import Profile from './screens/Profile/Profile';
import Edit from './screens/Edit/Edit';
import Create from './screens/Create/Create';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path='/'>
          {currentUser ? <Home currentUser={currentUser}/> : <Redirect to='/'/>}
          </Route>

          <Route exact path='/login'>
            <SignIn handleLogin={handleLogin}/>
          </Route>

          <Route exact path='/register'>
            <SignUp handleRegister={handleRegister}/>
          </Route>

          <Route exact path='/posts/create'>
            {currentUser ? <Create currentUser={currentUser}/> : <Redirect to='/'/>}
          </Route>

          <Route exact path='/posts/:id'>
          {currentUser ? <Details currentUser={currentUser}/> : <Redirect to='/'/>}
          </Route>

          <Route exact path='/profile' >
            {currentUser ? <Profile currentUser={currentUser}/> : <Redirect to='/'/>}
          </Route>

          <Route exact path='/posts/:id/edit'>
            {currentUser ? <Edit currentUser={currentUser}/> : <Redirect to='/'/>}
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
