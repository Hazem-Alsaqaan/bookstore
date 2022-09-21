import { Fragment, useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css"
import * as BooksAPI from "./BooksAPI"
import Search from "./components/search/Search";
import Home from "./components/home/Home";

const App = ()=>{
    const [books, setBooks] = useState([]);
    // get books
    useEffect(()=>{
        BooksAPI.getAll().then((data)=>setBooks(data))
    },[])
    // update shelf 
    const changeShelf = async(book, shelf)=>{
        await BooksAPI.update(book, shelf)
        BooksAPI.getAll().then((data)=>setBooks(data))
    }
    // search books
    const handleSearch = async(event)=>{
            await BooksAPI.search(event, 20).then((data)=>setBooks(data))
    }

    
    return (
        <Fragment>
            <div className="app">
                <Routes>
                    <Route path="/search" element= {<Search books={books} handleSearch={handleSearch} changeShelf={changeShelf}/>}/>
                    <Route path="/bookstore" element= {<Home books={books} changeShelf={changeShelf}/>}/>
                </Routes>
            </div>
        </Fragment>
    )
}

export default App;
