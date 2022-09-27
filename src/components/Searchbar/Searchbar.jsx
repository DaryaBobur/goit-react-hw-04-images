import { Component } from 'react';
import { toast } from 'react-toastify';
import { SearchbarContainer, SearchForm, SearchFormButton, SearchFormInput } from './SearchbarStyled';
import { FaSearch } from "react-icons/fa";

class Searchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.searchQuery.trim() === '') {
      toast.error('Please enter a word to search for images!')
      return;
    }
    
    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({searchQuery: ''});
  }

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
      
          <SearchFormButton type="submit">
            <FaSearch fontSize={18}/>
          </SearchFormButton>
      
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQuery}
            name="searchQuery"
            value={this.state.searchQuery}
          />
        </SearchForm>
      </SearchbarContainer>
    )
  }
}

export default Searchbar;