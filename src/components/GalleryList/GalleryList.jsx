import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import axios from "axios";


function GalleryList(props) {

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
                        />
                    )
                })
            }
        </div>

    )
}

export default GalleryList;