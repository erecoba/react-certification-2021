import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getLocal } from '../../utils/localstorage';
import { FAV_VIDEOS } from '../../utils/constants';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { useYoutubeVideo } from '../../state/Provider';
import { youtubeDetailVideo } from '../../state/actions/youtube';

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
} from './FavoriteDetail.styled';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/';

export const updateVideoSelectionEffect = ({ idVideo, youtubeDispatch }) => {
  const fetch = async () => {
    youtubeDispatch(await youtubeDetailVideo(idVideo));
  };
  fetch();
};

const FavoriteDetail = () => {
  const { idVideo } = useParams();
  const [favoriteVideos] = useState(getLocal(FAV_VIDEOS));
  const { youtubeState, youtubeDispatch } = useYoutubeVideo();
  const { detailVideo } = youtubeState;

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
            <TitleMayInterestYou>Tus favoritos...</TitleMayInterestYou>
            {favoriteVideos &&
              favoriteVideos.map((videoFavorite) => (
                <Card
                  isFluid
                  key={videoFavorite.id}
                  id={videoFavorite.id}
                  title={videoFavorite.title}
                  description={videoFavorite.description}
                  imgUrl={videoFavorite.imgUrl}
                  channelTitle={videoFavorite.channelTitle}
                  linkBase="favorites"
                />
              ))}
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

export default FavoriteDetail;