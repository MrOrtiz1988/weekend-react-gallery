import { useState } from 'react';



function GalleryItem (props) {

    const [isDescription, setIsDescription] = useState(false);

  // 1. Make the Toggle Shimmer button flip the isShimmering
  //    state variable between false and true.
  // 2. Conditionally apply the "shimmer" CSS class based on
  //    the value of isShimmering.
  const toggleDescription = () => {
    if (isDescription) {
      setIsDescription(false)
    } else {
      setIsDescription(true)
    }
  }

  const change = () => {
    if(isDescription) {
        return (
            <div>
                <img src={props.url}/> 
            </div>
        )
    }else {
        return (
            <div>
                <p>{props.description}</p>
            </div>
        )
    }
  }


    return (
        <>
         
         <br></br> 
         <button>Love it!</button>
         <p>0 people like this 😞</p> 
        </>
    )
}

export default GalleryItem;