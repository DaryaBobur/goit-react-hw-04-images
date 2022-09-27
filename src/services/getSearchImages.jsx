import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '28839601-0c610efa4f554b6dcd03095ae';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12'

const getSearchImages = async ({ searchQuery = '', currentPage = 1}) => {
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&${OPTIONS}`);
    const data = response.data.hits;
    return data;
}

const api = {
    getSearchImages
}

export default api;
