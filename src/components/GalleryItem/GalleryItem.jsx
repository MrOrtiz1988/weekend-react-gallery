import { useState } from 'react';
import './GalleryItem.css'



function GalleryItem (props) {

    const [isDescription, setIsDescription] = useState(false);

  const toggleDescription = () => {
    if (isDescription) {
      setIsDescription(false)
    } else {
      setIsDescription(true)
    }
  }

  const change = () => {
    if(!isDescription) {
        return (
         <img onClick={toggleDescription} className="pic-description" src={props.url}/> 
        )
    }else {
        return (
        <p onClick={toggleDescription} className="pic-description">{props.description}</p>
        )
    }
  }


    return (
        <>
         {change()}
         <br></br> 
         <button>Love it!</button>
         <p>0 people like this 😞</p> 
        </>
    )
}

export default GalleryItem;