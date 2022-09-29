import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { SearchbarContainer, SearchForm, SearchFormButton, SearchFormInput } from './SearchbarStyled';
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ onSubmit }) => {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(searchQuery.trim() === '' ) {
      toast.error('Please enter a word to search for images!')
      return;
    }
    
    onSubmit(searchQuery);
    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  }

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
      
        <SearchFormButton type="submit">
          <FaSearch fontSize={18}/>
        </SearchFormButton>
      
        <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearchQuery}
            name="searchQuery"
            value={searchQuery}
         />
      </SearchForm>
    </SearchbarContainer>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}

export default Searchbar;