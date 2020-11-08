import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

export default function Products(props) {
  const { bookFacade } = props;
  let { path, url } = useRouteMatch();
  const books = bookFacade.getBooks();

  const booksList = books.map((book) => (
    <li key={book.id}>
      <p>{book.title}</p>
      <Link to={`${url}/${book.title}, ${book.id}, ${book.info}`}>details</Link>
    </li>
  ));

  return (
    <div>
      <h2>Books</h2>
      <ul>{booksList}</ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
