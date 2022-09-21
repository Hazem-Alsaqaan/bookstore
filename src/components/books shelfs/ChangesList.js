import React, { Fragment } from "react";

const ChangesList = ({ book, changeShelf })=>{

    const selectShelf = (event)=>{
        changeShelf(book, event.target.value)
    }
    return(
        <Fragment>
            <div className="book-shelf-changer">
                            <select onChange={selectShelf} value = {book.shelf}>
                                <option value="none" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
            </div>
        </Fragment>
    )
}

export default ChangesList;