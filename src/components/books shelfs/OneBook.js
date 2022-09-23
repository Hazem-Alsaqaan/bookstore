import React, { Fragment } from "react";
import ChangesList from "./ChangesList";

const OneBook = ({book, changeShelf})=>{

    return(
        <Fragment>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            book.imageLinks.thumbnail ?`url(${book.imageLinks.thumbnail})` 
                            : book.imageLinks.smallThumbnail ?`url(${book.imageLinks.smallThumbnail})` : null,
                            }}
                        ></div>
                        <ChangesList book = {book} changeShelf = {changeShelf}/>
                    </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                </div>
            </li>

        </Fragment>
    )
}

export default OneBook;