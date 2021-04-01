import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { getLocal } from '../../utils/localstorage';
import { FAV_VIDEOS } from '../../utils/constants';

import { Container, NoVideosLabel } from './Favorite.styled';

const FavoritePage = () => {
  const favoriteVideos = getLocal(FAV_VIDEOS);
  return (
    <>
      <Header hideSearcher />
      <Container>
        {favoriteVideos ? (
          favoriteVideos.map((video) => (
            <Card
              key={video.id}
              id={video.id}
              title={video.title}
              description={video.description}
              imgUrl={video.imgUrl}
              channelTitle={video.channelTitle}
            />
          ))
        ) : (
          <NoVideosLabel>No fav videos</NoVideosLabel>
        )}
      </Container>
    </>
  );
};

export default FavoritePage;
