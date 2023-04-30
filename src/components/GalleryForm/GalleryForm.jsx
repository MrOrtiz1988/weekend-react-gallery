import axios from "axios";

function GalleryForm (props) {

    const sendData = (event) => {
        event.preventDefault();
        axios({
          method: 'POST',
          url: '/gallery',
          data: {
            path: props.imagePath,
            description: props.description
          }
        }).then((response) => {
          props.fetchGallery();
          props.setImagePath('');
          props.setDescription('');
        }).catch((error) => {
          console.log('whoopsie on sendData', error);
        })
      }

    return (
        <form onSubmit={sendData}>
            <h2>Add a Photo!</h2>
        <div> 
            <label>Path: <input
                type='text'
                placeholder="Where is the image?"
                value={props.imagePath}
                onChange={(event) => {props.setImagePath(event.target.value)}}
            /></label>
            
            <label>Description: <input 
                type='text'
                placeholder="Description of image?"
                value={props.description}
                onChange={(event) => {props.setDescription(event.target.value)}}
            /></label>  
    
        </div>
        <button type="submit">Save</button>
        </form>
    )
}

export default GalleryForm;