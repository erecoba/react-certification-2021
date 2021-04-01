import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FavoriteProcess } from '../../utils/favoriteProcess';
import StarIcon from '../../ui/icons/Star';
import { useSession } from '../../state/Provider';

import {
  Container,
  ImageFit,
  GradientContainer,
  Title,
  Description,
  TagChannel,
  FavStar,
} from './Card.styled';

const Card = ({ id, title, description, imgUrl, channelTitle, isFluid, canFavorite }) => {
  const history = useHistory();
  const [isShown, setIsShown] = useState(false);
  const { sessionState } = useSession();

  const handleAddFavorite = () => {
    if (!sessionState.user) {
      // eslint-disable-next-line no-alert
      alert('Log in before to add a favorite video');
      return;
    }

    const videoFavorite = new FavoriteProcess({
      id,
      title,
      description,
      imgUrl,
      channelTitle,
    });

    videoFavorite.addOrRemoveVideo().updateLocalStorage().displayMessage();
  };

  return (
    <Container
      isFluid={isFluid}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ImageFit src={imgUrl} alt={title} onClick={() => history.push(`/videos/${id}`)} />
      <GradientContainer
        aria-label="card-container"
        onClick={() => history.push(`/videos/${id}`)}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </GradientContainer>
      <TagChannel>{channelTitle}</TagChannel>
      {canFavorite && isShown && (
        <FavStar onClick={handleAddFavorite}>
          <StarIcon color="white" />
        </FavStar>
      )}
    </Container>
  );
};

export default Card;
