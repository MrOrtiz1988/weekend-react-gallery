import React from 'react';
import { useState } from 'react';
import './GalleryItem.css';
import axios from "axios";


function GalleryItem (props) {

    const [isDescription, setIsDescription] = useState(false);

  const toggleDescription = () => {
    if (isDescription) {
      setIsDescription(false)
    } else {
      setIsDescription(true)
    }
  }

  const changePicToDescription = () => {
    if(!isDescription) {
        return (
         <img onClick={toggleDescription} className="pic-description" src={props.url}/> 
        )
    }else {
        return (
        <div onClick={toggleDescription} className="pic-description">{props.description}</div>
        )
    }
  }

 

    return (
        <div className='single-item'>
         {changePicToDescription()}
         <br></br> 
         <button className='like-btn' onClick={props.likeHandler}>💖Love it!💖</button>
         <p>{props.likes} people love this {props.likes > 0 ? '😍' : '😞'}</p> 
        </div>
    )
}

export default GalleryItem;