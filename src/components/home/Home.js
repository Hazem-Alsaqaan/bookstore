import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BooksShelfs from "../books shelfs/BooksShelfs";


const Home = ({books, changeShelf})=>{
    
    return(
        <Fragment> 
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BooksShelfs books={books} changeShelf = {changeShelf} shelf ="currentlyReading"/>
                        <BooksShelfs books={books} changeShelf = {changeShelf} shelf ="wantToRead"/>
                        <BooksShelfs books={books} changeShelf = {changeShelf} shelf ="read"/>
                    </div>                  
                </div> 
                <div className="open-search">
                    <Link to="/search"></Link>
                </div>  
            </div>                                
        </Fragment>
    )
}

export default Home;

