import React, { Fragment } from "react";
import OneBook from "./OneBook";


const BooksShelfs = ({books, shelf, changeShelf})=>{

    return(
        <Fragment>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                        <ol className="books-grid">   
                            {books.map((book)=>
                                (book.shelf === shelf)?
                                    (<OneBook key={book.id} book = {book} changeShelf = {changeShelf}/>)
                                :
                                    (null)
                            )}
                        </ol>
                </div>
            </div> 
                
        </Fragment>
    )
}

export default BooksShelfs;