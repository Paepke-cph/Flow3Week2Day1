import React from "react";
import Product from './Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

const Products = ({bookFacade}) => {
  let {path, url} = useRouteMatch();    
  return(
    <div>
      <h2>Products</h2>
      <ul>
        {bookFacade.getBooks().map(({id,title}) => {
            return (
            <li key={id}>{title}
              <NavLink to={`${url}/${id}`}>Details</NavLink>
            </li>)
        })}
      </ul>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:productId`}>
          <Product bookFacade={bookFacade}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;