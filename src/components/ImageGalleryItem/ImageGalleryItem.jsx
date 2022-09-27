import PropTypes from 'prop-types';
import { ImageGalleryCard, Image } from './ImageGalleryItemStyled';

const ImageGalleryItem = ( { items, onClick } ) => {
  return (
    items.map(({id, webformatURL, tags, largeImageURL}) => (
      <ImageGalleryCard key={id} onClick={() => onClick({largeImageURL, tags})}>
        <Image src={webformatURL} alt={tags}/>
      </ImageGalleryCard>
    ))
  )
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem; 