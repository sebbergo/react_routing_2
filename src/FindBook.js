import React, { useState } from "react";
import AddBook from "./AddBook";

export default function FindBook(props) {
  const { bookFacade } = props;
  const [bookId, setBookId] = useState({ id: 0 });
  const [book, setBook] = useState({ id: 0, title: "", info: "" });

  const handleSubmitFindBook = (event) => {
    event.preventDefault();
    setBook(bookFacade.findBook(bookId.id));
  };

  const handleSubmitDeleteBook = (event) => {
    event.preventDefault();
    console.log(bookFacade.getBooks());
    bookFacade.deleteBook(bookId.id);
    console.log(bookFacade.getBooks());
  };

  function handleChange(event) {
    const value = event.target.value;
    setBookId({
      ...bookId,
      id: value,
    });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitFindBook}>
          <div>
            <input
              type="number"
              placeholder="Find book id"
              id="bookId"
              value={bookId.id}
              onChange={handleChange}
            />
            <input type="submit" value="Find" />
            <h4>Find a book by id in the form above</h4>
          </div>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmitDeleteBook}>
          <div>
            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <p>Info: {book.info}</p>
            <input type="submit" value="Delete" />
          </div>
        </form>
      </div>
    </div>
  );
}
