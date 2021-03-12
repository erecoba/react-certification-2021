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

export const updateVideoSelectionEffect = ({ idVideo, dispatch }) => {
  const fetch = async () => {
    dispatch(await youtubeDetailVideo(idVideo));
    dispatch(await youtubeRelatedVideos(idVideo));
  };
  fetch();
};

const VideoDetail = () => {
  const { idVideo } = useParams();
  const { state, dispatch } = useYoutubeVideo();
  const { detailVideo, relatedVideos } = state;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateVideoSelectionEffect({ idVideo, dispatch }), [idVideo]);

  return (
    <>
      <Header hideSearcher />
      <Container>
        <Wrapper>
          <VideoContainer>
            <VideoFrame src={`http://www.youtube.com/embed/${idVideo}`} frameBorder="0" />
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
