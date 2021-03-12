import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  ImageFit,
  GradientContainer,
  Title,
  Description,
  TagChannel,
} from './Card.styled';

const Card = ({ id, title, description, imgUrl, channelTitle, isFluid }) => {
  const history = useHistory();

  return (
    <Container isFluid={isFluid} onClick={() => history.push(`/videos/${id}`)}>
      <ImageFit src={imgUrl} alt={title} />
      <GradientContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </GradientContainer>
      <TagChannel>{channelTitle}</TagChannel>
    </Container>
  );
};

export default Card;
