import React from "react";
import './style2.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import App2 from './App2';
import App3 from './App3';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <CustomRouter/>
  );
}

const CustomRouter = () => {
  return(
    <Router>
      <div>
        <ExerciseHeader/>
        <hr/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/exercise1">
              <App2/>
            </Route>
            <Route path="/exercise2">
              <App3/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const ExerciseHeader = () => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/exercise1">Exercise 1</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/exercise2">Exercise 2</NavLink>
      </li>
    </ul>
  );  
}


const DefaultRouter = () => {
  return (
    <Router>
      <div>
        <Header/>
        <hr/>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
      </li>
    </ul>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
