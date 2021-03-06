import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './root/Home.jsx';
import CowList from './cows/CowList.jsx';
import CowInfo from './cows/CowInfo.jsx';
import CowCreate from './cows/CowCreate.jsx';
import CowUpdate from './cows/CowUpdate.jsx';

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
          <li className='nav-item'>
            <NavLink
              exact
              className='nav-link'
              activeClassName='active'
              to='/cows'>
              Cows
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
      <Route exact path='/cows' component={CowList} />
      <Route exact path='/cows/new' component={CowCreate} />
      <Route exact path='/cows/:_id' component={CowInfo} />
      <Route exact path='/cows/:_id/edit' component={CowUpdate} />
    </Switch>
  );
};

export default App;
