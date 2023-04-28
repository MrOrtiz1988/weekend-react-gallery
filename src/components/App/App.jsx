import React from 'react';
import './App.css';
import Header from '../Header/Header'

function App() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
