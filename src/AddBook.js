import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function AddBook(props) {
  const { bookFacade } = props;
  const [book, setBook] = useState({ id: "", title: "", info: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    bookFacade.addBook(book);
  };

  function handleChange(event) {
    const value = event.target.value;
    setBook({
      ...book,
      [event.target.id]: value,
    });
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="title">
            Title:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="title"
              placeholder="Enter title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="info">
            Info:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="info"
              placeholder="Enter info"
              value={book.info}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
