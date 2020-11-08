import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import "./index.css";
import AddBook from "./AddBook";
import Products from "./Products";
import React, { useState, useEffect } from "react";
import FindBook from "./FindBook";

function App(props) {
  const emptyBook = { id: "", title: "", info: "" };
  const [book, setBook] = useState(emptyBook);

  const { bookFacade } = props;

  function Header() {
    return <h2>Header component</h2>;
  }

  function Home() {
    return <h2>Home component</h2>;
  }

  function Company() {
    return <h2>Company component</h2>;
  }

  function NoMatch() {
    return <h2>Didn't find a match for you</h2>;
  }

  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/company">
            Company
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/findbook">
            Find Book
          </NavLink>
        </li>
      </ul>

      <Header className="header" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/findbook">
          <FindBook bookFacade={bookFacade} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
