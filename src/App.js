import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './style2.css';
import App2 from './App2';
import App3 from './App3';

export default function NestingExample(props) {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics info={props.info}/>
          </Route>
          <Route path="/exercises">
            <Exercises/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const Exercises = () => {
  let {path ,url} = useRouteMatch();
  return(
    <div>
      <h2>Exercises</h2>
      <ul>
        <li>
          <Link to={`${url}/exercise1`}>Exercise 1</Link>
        </li>
        <li>
          <Link to={`${url}/exercise2`}>Exercise 2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a exercise.</h3>
        </Route>
        <Route path={`${path}/:exerciseId`}>
          <Exercise/>
        </Route>
      </Switch>
    </div>    
  );
}

function Exercise() {
  let { exerciseId} = useParams();
  let app;
  if(exerciseId === "exercise1") app = <App2/>
  if(exerciseId === "exercise2") app = <App3/>
  return (
    app
  );
}

function Topics(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {props.info.map(
          ({id,title,info}) => {
            return (
              <li key={id}>
                <Link to={`${url}/${id}`}>{title}</Link>
              </li>
            );
          }
        )}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic info={props.info}/>
        </Route>
      </Switch>
    </div>
  );
}

function Topic(props) {
  let {topicId} = useParams();
  let myInfo = props.info.find(({id}) => {return id === topicId});
  return (
    <div>
      <h3>{topicId}</h3>
      <h4>{myInfo.info}</h4>
    </div>
  );
}
