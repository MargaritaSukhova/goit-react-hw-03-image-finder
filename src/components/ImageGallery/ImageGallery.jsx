import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={openModal} />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
