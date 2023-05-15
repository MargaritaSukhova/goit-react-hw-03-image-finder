const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34919786-dfee031f92fa2ae99264bebb';
const PER_PAGE = '12';

const SearchImages = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
};

export default SearchImages;
