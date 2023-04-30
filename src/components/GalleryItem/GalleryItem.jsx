import * as React from 'react';
import { useState } from 'react';
import './GalleryItem.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
         <Button variant="contained" className='like-btn' onClick={props.likeHandler}>💖Love it!💖</Button>
         <br></br>
         <IconButton onClick={props.remove} aria-label="delete" size="large">
           <DeleteIcon color="secondary" fontSize='inherit' />
         </IconButton>
         <p>{props.likes} people love this {props.likes > 0 ? '😍' : '😞'}</p> 
        </div>
    )
}

export default GalleryItem;