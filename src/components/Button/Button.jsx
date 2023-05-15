import { BtnContainer, Btn } from './Button.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <BtnContainer>
      <Btn type="button" onClick={handleLoadMore}>
        Load more
      </Btn>
    </BtnContainer>
  );
};

export default LoadMoreBtn;
