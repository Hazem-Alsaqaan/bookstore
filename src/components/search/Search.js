import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import OneBook from "../books shelfs/OneBook";

const Search = ({handleSearch, books, changeShelf })=>{

    const temp = true;
    const searchBooks = (event)=>{
            const debouncing = setTimeout(()=>{
                if(temp){
                    handleSearch(event.target.value);
                }
        },1500)
        return ()=>{
            clearTimeout(debouncing)
        }
        
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
                            onChange={searchBooks}
                        />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {books.length > 0 ? books.map((book)=> 
                        <OneBook key={book.id} book = {book} changeShelf={changeShelf}/>
                        ): <div>No book found</div>}
                        </ol>
                    </div>
                </div>
        </Fragment>
    )
}
export default Search;