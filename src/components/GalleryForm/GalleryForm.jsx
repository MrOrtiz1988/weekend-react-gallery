import axios from "axios";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function GalleryForm(props) {

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