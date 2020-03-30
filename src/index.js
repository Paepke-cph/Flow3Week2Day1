import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const info = [
  {id: "rendering", title:"Rendering with React",info:"This is the rendering page"},
  {id: "components", title:"Components",info:"This is the page about components"},
  {id: "props-v-state", title:"Props v. State",info:"This is a page about the differents between Props and State"},
  {id: "react-route", title:"React Route",info:"This is a page about....."},
]
ReactDOM.render(<App info={info} />, document.getElementById('root'));