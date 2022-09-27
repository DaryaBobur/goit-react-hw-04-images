import { Component } from 'react';

import api from '../../services/getSearchImages';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerApp } from './AppStyled';


class App extends Component {
  state = {
    items: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    openModal: false,
    modalImg: {
        largeImageURL: '',
        tags: ''
      }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.GetSearchImages()
    }

    else if(prevState.items !== this.state.items && this.state.items.length === 0) {
      toast.error('Sorry, there are no images matching your search query. Please try again.');
      return this.state.items === []; 
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      items: [],
    });
  };


  GetSearchImages = async () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

      try {
        this.setState({ isLoading: true });

        const items = await api.getSearchImages(options);

        this.setState(prevState => ({
        items: [...prevState.items, ...items],
        currentPage: prevState.currentPage + 1,
        }));
      } 
      catch (error) {
        this.setState({ error });
      } 
      finally {
        this.setState({ isLoading: false });
      }
  }

  isOpenModal = (modalImg) => {
    this.setState({
      openModal: true,
      modalImg
    })
  }

  isCloseModal = () => {
    this.setState({
      openModal: false,
      modalImg: {
        largeImageURL: '',
        tags: ''
      }
    })
  }

  render() {
    const {items, isLoading, openModal, modalImg } = this.state;
    const {onChangeQuery, GetSearchImages, isCloseModal, isOpenModal} = this;

    return (
      <ContainerApp>
        <Searchbar 
          onSubmit={onChangeQuery}
        />

      <ImageGallery
       items={items}
       onClick={isOpenModal} 
      />

        {items.length > 0 && 
          <Button 
            onClick={GetSearchImages}
          />
        }

        {isLoading && <Loader/>}
        
        {openModal && <Modal onClose={isCloseModal}>
          <img src={modalImg.largeImageURL} alt={modalImg.tags} />
        </Modal>
        }

        <ToastContainer 
          autoClose={3000} 
          theme={'colored'}
        />

      </ContainerApp>
    );
  }
};

export default App;