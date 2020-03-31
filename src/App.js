import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect
} from "react-router-dom";

import Home from './components/Home';
import Products from './components/Products';
import Company from './components/Company';
import NoMatch from './components/NoMatch';
import AddBook from './components/AddBook';
import FindBook from './components/FindBook';
import Login from './components/Login';

export default function App({bookFacade}) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} />
        <MainSwitch bookFacade={bookFacade} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </Router>
    </div>
  );
}

const Header = ({loggedIn}) => {
  return(  
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li hidden={!loggedIn}><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li hidden={!loggedIn}><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      <li hidden={loggedIn}><NavLink activeClassName="active" to="/login">Login</NavLink></li>
      <li hidden={!loggedIn}><NavLink activeClassName="active" to="/login">Logout</NavLink></li>
    </ul>
  );
};

const MainSwitch = ({bookFacade, loggedIn, setLoggedIn}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/products">
        <Products bookFacade={bookFacade}/>
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/add-book">
        <AddBook bookFacade={bookFacade}/>
      </Route>
      <Route path="/find-book">
        <FindBook bookFacade={bookFacade}/>
      </Route>
      <Route path="/login">
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};