import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../Button/Button';
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
    showBtn: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.setState({ isLoading: true });
      SearchImages(value, page)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(new Error('Something went wrong'));
          }
          return response.json();
        })
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          console.log(error);
          console.log(error.message);
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = value => {
    console.log(value);
    this.setState({
      value,
      page: 1,
      images: [],
      isEmpty: false,
      showBtn: false,
      error: null,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error, isEmpty, showBtn } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <Error>{error.message}</Error>}
        {isEmpty && <Error>No images found</Error>}
        <ImageGallery images={images} />
        {showBtn && <LoadMoreBtn handleLoadMore={this.handleLoadMore} />}
        <ToastContainer autoClose={2500} />
      </AppContainer>
    );
  }
}

export default App;
