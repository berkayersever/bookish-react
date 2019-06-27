import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Bookish</h1>
            <div className="books">
                <div className="book">
                    <h2 className="title">Refactoring</h2>
                </div>
                <div className="book">
                    <h2 className="title">Domain-driven design</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
