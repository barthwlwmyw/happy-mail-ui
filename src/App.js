import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Auth from './components/Auth'

const App = () => {
  return (
    <div className='App'>
      <Router>
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
        <hr />
        <Switch>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
