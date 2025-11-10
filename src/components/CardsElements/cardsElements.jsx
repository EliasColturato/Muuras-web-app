import { CardElementsWrapper, CardTextWrapper } from './styleCardsElements';

export default function CardsElements({ imgPath, Title, Text }) {
  return (
    <CardElementsWrapper>
      <img src={imgPath} alt={Title} />
      <CardTextWrapper>
        <h3>{Title}</h3>
        <p>{Text}</p>
      </CardTextWrapper>
    </CardElementsWrapper>
  );
}
