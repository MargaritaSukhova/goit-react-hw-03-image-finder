const SearchImages = query => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=1&key=34919786-dfee0391f92fa2ae99264bebb&image_type=photo&orientation=horizontal&per_page=12https://pixabay.com/api/`
  ).then(response => response.json());
};

export default SearchImages;
