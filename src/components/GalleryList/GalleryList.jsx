import ListItem from '../GalleryItem/GalleryItem';



function GalleryList (props) {
    return (
        <div>
        {
            props.gallery.map((item) => {
                return (
                   <ListItem 
                    key={item.id}
                    url={item.path}
                   /> 
                )
            })
        }
        </div>
        
    )
}

export default GalleryList;