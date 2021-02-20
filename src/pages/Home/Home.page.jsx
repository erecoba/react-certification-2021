import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container } from './Home.styled';

import mock from '../../mocks/videos.json';

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        {mock.items.map((video) => {
          return (
            <Card
              key={video.etag}
              title={video.snippet.title}
              description={video.snippet.description}
              imgUrl={video.snippet.thumbnails.medium.url}
              channelTitle={video.snippet.channelTitle}
            />
          );
        })}
      </Container>
    </>
  );
}

export default HomePage;
