import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookDetailContainer from './containers/BookDetailContainer/index';
import BookListContainer from './containers/BookListContainer/index';

function App() {
    return (
        <div className="container">
            <h1>Bookish</h1>
            {/*<BookListContainer/>*/}
            <main>
                <Route exact path="/" component={BookListContainer}/>
                <Route path="/books/:id" component={BookDetailContainer}/>
            </main>
        </div>
    );
}

export default App;