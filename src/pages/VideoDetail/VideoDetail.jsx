import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { useYoutubeVideo } from '../../state/Provider';
import { youtubeRelatedVideos, youtubeDetailVideo } from '../../state/actions/youtube';

import {
  Container,
  VideoContainer,
  VideoFrame,
  Wrapper,
  VideoRelalatedContaier,
  TitleMayInterestYou,
  TitleVideo,
  DescriptionVideo,
  DetailContainer,
  RankingContainer,
  LikesText,
} from './VideoDetail.styled';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/';

export const updateVideoSelectionEffect = ({ idVideo, youtubeDispatch }) => {
  const fetch = async () => {
    youtubeDispatch(await youtubeDetailVideo(idVideo));
    youtubeDispatch(await youtubeRelatedVideos(idVideo));
  };
  fetch();
};

const VideoDetail = () => {
  const { idVideo } = useParams();
  const { youtubeState, youtubeDispatch } = useYoutubeVideo();
  const { detailVideo, relatedVideos } = youtubeState;

  const originUrl = `${window.location.protocol}//${window.location.hostname}`;

  useEffect(() => updateVideoSelectionEffect({ idVideo, youtubeDispatch }), [
    idVideo,
    youtubeDispatch,
  ]);

  return (
    <>
      <Header hideSearcher />
      <Container>
        <Wrapper>
          <VideoContainer>
            <VideoFrame
              src={`${VIDEO_EMBED_URL}${idVideo}?origin=${originUrl}`}
              frameBorder="0"
            />
          </VideoContainer>
          <VideoRelalatedContaier>
            <TitleMayInterestYou>Tal vez te interese...</TitleMayInterestYou>
            {relatedVideos.map(
              (relatedVideo) =>
                relatedVideo.snippet && (
                  <Card
                    isFluid
                    key={relatedVideo.etag}
                    id={relatedVideo.id.videoId}
                    title={relatedVideo.snippet.title}
                    description={relatedVideo.snippet.description}
                    imgUrl={relatedVideo.snippet.thumbnails.medium.url}
                    channelTitle={relatedVideo.snippet.channelTitle}
                  />
                )
            )}
          </VideoRelalatedContaier>
        </Wrapper>
        <DetailContainer>
          <TitleVideo>{detailVideo.snippet && detailVideo.snippet.title}</TitleVideo>
          <RankingContainer>
            <LikesText>
              {detailVideo.statistics && detailVideo.statistics.viewCount} Vistas
            </LikesText>
            <LikesText>
              {detailVideo.statistics && detailVideo.statistics.likeCount} Me gusta
            </LikesText>
            <LikesText>
              {detailVideo.statistics && detailVideo.statistics.dislikeCount} No me gusta
            </LikesText>
          </RankingContainer>
          <DescriptionVideo>
            {detailVideo.snippet &&
              detailVideo.snippet.description
                .split('\n')
                .map((str) => <p key={Math.random(0)}>{str}</p>)}
          </DescriptionVideo>
        </DetailContainer>
      </Container>
    </>
  );
};

export default VideoDetail;
