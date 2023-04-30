import * as React from 'react';
import { useState } from 'react';
import './GalleryItem.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function GalleryItem (props) {

  const [isDescription, setIsDescription] = useState(false);

  //this toggles from false to true to be used with the changePicToDescription function
  const toggleDescription = () => {
    if (isDescription) {
      setIsDescription(false)
    } else {
      setIsDescription(true)
    }
  }

  //this function is responsible for when you click on the image it switches out to show a description
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

  //had some more fun swapping out the normal html stuff with the components that material-ui offers
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