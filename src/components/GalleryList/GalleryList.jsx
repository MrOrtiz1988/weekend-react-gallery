import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


function GalleryList (props) {
    return (
        <div className='gallery'>
        {
            props.gallery.map((item) => {
                return (
                   <GalleryItem 
                    key={item.id}
                    url={item.path}
                    description={item.description}
                   /> 
                )
            })
        }
        </div>
        
    )
}

export default GalleryList;