import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {

//here i have 3 hooks one for the gallery and the other two for the inputs
  const [gallery, setGallery] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [description, setDescription] = useState('');

  //fetchGallery is in the useEffect so it gets the data when dom loads up
  useEffect(() => {
    fetchGallery();
  }, []);

  //fetchGallery "fetches" the data from database
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

  //i only needed 3 components for this return: Header, GalleryForm, and GalleryList
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
