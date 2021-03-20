import { Switch, Redirect } from 'react-router-dom';

import { WithAuthConsumer } from '../contexts/AuthContext';

import AuthenticatedRoute from './auth/AuthenticatedRoute';
import NotAuthenticatedRoute from './auth/NotAuthenticatedRoute';
import SignIn from './auth/SingIn';
import Home from '../components/Home';

import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <AuthenticatedRoute exact path='/'>
          <Home/>
        </AuthenticatedRoute>

        <NotAuthenticatedRoute exact path='/signin'>
          <SignIn/>
        </NotAuthenticatedRoute>

        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default WithAuthConsumer(App);