import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from './ImageGalleryStyled';


const ImageGallery =({ items }) => {
    return (
        <ImageGalleryList>
            <ImageGalleryItem 
              items={items}
            />
        </ImageGalleryList>
    )  
}

ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ImageGallery;