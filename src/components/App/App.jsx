import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGalleryItem from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import SearchImages from 'services/pixabay-api';
import { AppContainer } from '../App/App.styled';
import { Error } from '../Error/Error.styled';

class App extends Component {
  state = {
    value: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    isEmpty: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ isLoading: true });
      SearchImages(this.state.value)
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { images, isLoading, error, isEmpty } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <Error>Something went wrong</Error>}
        {isEmpty && <Error>No images found</Error>}
        <ImageGalleryItem images={images} />
        <ToastContainer autoClose={2500} />
      </AppContainer>
    );
  }
}

export default App;
