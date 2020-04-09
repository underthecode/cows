import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './root/Home.jsx';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navigation />
        <div className='container'>
          <Main />
        </div>
      </Router>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
      <div className='container'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink exact className='nav-link' activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default App;
