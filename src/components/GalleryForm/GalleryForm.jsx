import axios from "axios";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function GalleryForm(props) {

  //sendData sends values that where currently typed in the input to the database, then fetchGallery is run to keep DOM in sync
  //also resets the values in the inputs back to empty 
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

  //in this return i used a material-ui componenet to be used as an input
  return (
    <form onSubmit={sendData}>
      <h2>Add a Photo!</h2>
      <div className="form-div">
        <div className="input-div">
          <Input
            placeholder="Where is the image?"
            value={props.imagePath}
            onChange={(event) => { props.setImagePath(event.target.value) }}
          />
        </div>
        <div className="input-div">
          <Input
            placeholder="Description of image?"
            value={props.description}
            onChange={(event) => { props.setDescription(event.target.value) }}
          />
        </div>

      </div>
      <Button variant="contained" color="success" size="small" type="submit" mt={5}>Save</Button>
    </form>
  )
}

export default GalleryForm;