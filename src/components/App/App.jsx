import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {

  const [gallery, setGallery] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGallery(response.data);
    }).catch((error) => {
      console.log('whoopsie on fetchGallery', error);
    })
  }

  return (
    <div className="App">
      <Header />
      <GalleryForm
        fetchGallery={fetchGallery}
        imagePath={imagePath}
        setImagePath={setImagePath}
        description={description}
        setDescription={setDescription}
      />
      <p>Gallery goes here</p>
      <GalleryList
        gallery={gallery}
        fetchGallery={fetchGallery}
      />
    </div>
  );
}

export default App;
