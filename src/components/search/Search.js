import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import OneBook from "../books shelfs/OneBook";

const Search = ({handleSearch, books, changeShelf })=>{
    const searchBooks = (event)=>{
        handleSearch(event)
    }
    return(
        <Fragment>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/bookstore" className="close-search">close</Link>
                        <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            onChange={(e)=>searchBooks(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {books.map((book)=><OneBook key={book.id} book = {book} changeShelf={changeShelf}/>)}
                        </ol>
                    </div>
                </div>
        </Fragment>
    )
}
export default Search;