import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import axios from "axios";

function GalleryList(props) {

    //likeHandler updates the column in databes which value holds the number of likes
    const likeHandler = (id) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${id}`
        }).then(response => {
            console.log(response);
            props.fetchGallery();
        }).catch((error) => {
            console.log('whoopsie on likeHandler', error);
        })
    }

    //remove deletes from the database where the row equals its id
    const remove = (Id) => {
        axios({
            method: 'DELETE',
            url: `/gallery/${Id}`,
        }).then(function(response){
            props.fetchGallery();
        }).catch(function(error) {
            console.log('whoopsie on remove', error);
        })
    }

    //this return is responsible for looping through the rows with its values and attach each one to the GalleryItem component
    return (
        <div className='gallery'>
            {
                props.gallery.map((item) => {
                    return (
                        <GalleryItem
                            key={item.id}
                            url={item.path}
                            description={item.description}
                            likeHandler={() => likeHandler(item.id)}
                            likes={item.likes}
                            remove={() => remove(item.id)}
                        />
                    )
                })
            }
        </div>

    )
}

export default GalleryList;