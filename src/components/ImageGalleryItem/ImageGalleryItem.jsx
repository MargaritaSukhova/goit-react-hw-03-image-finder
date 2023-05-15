import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  const { id, webformatURL, largeImageURL, tags } = image;
  return (
    <GalleryItem id={id} data-url={largeImageURL}>
      <GalleryImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
