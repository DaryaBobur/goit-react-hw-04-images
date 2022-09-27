import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from './ImageGalleryStyled';


const ImageGallery =({ items, onClick }) => {
    return (
        <ImageGalleryList>
            <ImageGalleryItem 
              items={items}
              onClick={onClick}
            />
        </ImageGalleryList>
    )  
}

ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery;