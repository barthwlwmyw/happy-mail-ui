import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Auth from './components/Auth'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='App'>
      <h3>
        Happy mail ui
      </h3>
      <hr />
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/auth'>
        <p>Log In</p>
      </Link>
      <Link to='/profile'>
        <p>Profile</p>
      </Link>
      <hr />
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
