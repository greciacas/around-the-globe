import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignIn from './screens/SignIn/SignIn';
import { loginUser } from './services/auth';
import Home from './screens/Home/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/auth/login'>
            <SignIn handleLogin={handleLogin}/>
          </Route>

          <Route exact path='/register'>
            <h2>register</h2>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
