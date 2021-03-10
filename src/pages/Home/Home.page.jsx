import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container } from './Home.styled';

import { useYoutubeVideo } from '../../state/Provider';

function HomePage() {
  const { state } = useYoutubeVideo();
  const { videos } = state;

  return (
    <>
      <Header />
      <Container>
        {/* {mock.items.map((video) => ( */}
        {videos.map((video) => (
          <Card
            key={video.etag}
            title={video.snippet.title}
            description={video.snippet.description}
            imgUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
          />
        ))}
      </Container>
    </>
  );
}

export default HomePage;
