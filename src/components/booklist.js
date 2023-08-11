import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const BookCard = (props) => (
    <div class="card-container">
    {/* <Link to={`/viewbook/${props.keyt}`}> */}
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div class="desc ">
        <h2><a href="/show-book/123id">{props.title}</a></h2>
        {/* <h2><Link to={`/viewbook/${props.keyt}`}>{props.title}</Link></h2> */}
        <h3>{props.author}</h3>
        
        <div className="d-flex w-100 justify-content-between">
        <p>{props.description}</p>      
            <button onClick={() => props.deleteBook(props.keyt)} type="button" class="close" aria-label="Close">X</button>
        </div>   
      </div>
      {/* </Link> */}
    </div>
  );

export default function BookList() {

    const [books, setBooksList] = useState([]);
    useEffect(() => {
        axios
            .get('https://practiceflsbe.onrender.com/book/')
            .then((response) => {
                setBooksList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteBook = (id) => {
        axios
            .delete(`https://practiceflsbe.onrender.com/book/delete/${id}`)
            .then((response) => {
                console.log(response.data);
                setBooksList(books.filter((el) => el._id !== id)); // Note the use of "_id"
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
      <div className="BookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <br />
              <h2 className="display-4 text-center">Books List</h2>
              <div className="counter">{books.length}</div>
            </div>
            <div className="col-md-11">
                <br/>
              <Link to="/add" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
            <div className="list">
              {books.map((book) => {
                return (
                  <BookCard
                    author={book.author}
                    title={book.title}
                    description={book.description}
                    key={book._id}
                    keyt={book._id}
                    deleteBook={deleteBook}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );

}
