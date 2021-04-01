import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StarIcon from '../../ui/icons/Star';
import { FavoriteProcess } from '../../utils/favoriteProcess';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Avatar from '../../components/Avatar';

import { useYoutubeVideo, useSession } from '../../state/Provider';
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
  const { sessionState } = useSession();

  const originUrl = `${window.location.protocol}//${window.location.hostname}`;

  useEffect(() => updateVideoSelectionEffect({ idVideo, youtubeDispatch }), [
    idVideo,
    youtubeDispatch,
  ]);

  const handleFavoriteVideo = () => {
    if (!sessionState.user) {
      // eslint-disable-next-line no-alert
      alert('Log in before to add a favorite video');
      return;
    }
    const videoFavorite = new FavoriteProcess({
      id: idVideo,
      title: detailVideo.snippet.title,
      description: detailVideo.snippet.description,
      imgUrl: detailVideo.snippet.thumbnails.medium.url,
      channelTitle: detailVideo.snippet.channelTitle,
    });

    videoFavorite.addOrRemoveVideo().updateLocalStorage().displayMessage();
  };

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
                    canFavorite
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
            <LikesText>
              <Avatar clickable onClick={handleFavoriteVideo}>
                <StarIcon color="white" />
              </Avatar>
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
