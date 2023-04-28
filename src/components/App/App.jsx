import React from 'react';
import './App.css';
import Header from '../Header/Header'
import ListItem from '../GalleryItem/GalleryItem';

function App() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        <ListItem />
      </div>
    );
}

export default App;
