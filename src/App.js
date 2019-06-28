import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookDetailContainer from './containers/BookDetailContainer';
import BookListContainer from './containers/BookListContainer';

function App() {
    return (
        <div className="App">
            <h1>Bookish</h1>
            <BookListContainer/>
            <main>
                <Route exact path="/" component={BookListContainer}/>
                <Route path="/books/:id" component={BookDetailContainer}/>
            </main>
        </div>
    );
}

export default App;