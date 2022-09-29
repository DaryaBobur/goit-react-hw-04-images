import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageGalleryCard, Image } from './ImageGalleryItemStyled';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ items }) => {

  const [openModal, setOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  const isOpenModal = ({ largeImageURL, tags }) => {
    setOpenModal(true);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  }

  return (
    <>
      {items.map(({id, webformatURL, tags, largeImageURL}) => (
        <ImageGalleryCard key={id} onClick={() => isOpenModal({ largeImageURL, tags })}>
          <Image src={webformatURL} alt={tags}/>     
        </ImageGalleryCard>
      ))}

      {openModal && 
        <Modal onClose={() => setOpenModal(false)}>
          <img src={largeImageURL} alt={tags}/>
        </Modal>
      }
    </> 
  )
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
}

export default ImageGalleryItem; 