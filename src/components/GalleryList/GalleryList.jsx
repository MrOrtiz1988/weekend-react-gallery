import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList (props) {
    return (
        <div>
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