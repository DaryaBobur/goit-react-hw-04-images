import { useState, useEffect } from 'react';

import api from '../../services/getSearchImages';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from 'components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContainerApp, Error } from './AppStyled';

const App = () => {

  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setItems([])
  };

  useEffect(() => {
  
    const GetSearchImages = async () => {
      const options = { searchQuery: searchQuery, currentPage };
      if(!searchQuery) {
        return;
      }      

      try {
        setIsLoading(true);
        const data = await api.getSearchImages(options);

        setItems((prevItems) => {
          return [...prevItems, ...data]
        })
        } 
        catch (error) {
          setError(error);
        } 
        finally {
          setIsLoading(false);
      }
    }

    GetSearchImages();

  }, [currentPage, searchQuery])

  const loadMore =() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <ContainerApp>
      <Searchbar 
        onSubmit={onChangeQuery}
      />

      <ImageGallery
       items={items}
      />

      {items.length > 0 && 
        <Button 
          onClick={loadMore}
        />
      }

      {isLoading && <Loader/>}

      {error && <Error>Please try again later!</Error>}

      <ToastContainer 
        autoClose={3000} 
        theme={'colored'}
      />

      </ContainerApp>
  );
}

export default App;