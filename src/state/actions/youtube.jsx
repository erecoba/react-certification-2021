import * as types from '../types';
import Services from '../../services';

const YoutubeService = Services().youtube;

export const youtubeGetVideos = async () => {
  const response = await YoutubeService.getVideos();
  const videos = response.result.items || [];

  return {
    payload: { videos },
    type: types.YOUTUBE_GET_VIDEOS,
  };
};

export const youtubeSearchVideos = async (search) => {
  const response = await YoutubeService.searchVideos(search);
  const videos = response.result.items;

  return {
    payload: { videos },
    type: types.YOUTUBE_SEARCH_VIDEOS,
  };
};

export const youtubeRelatedVideos = async (relatedToVideoId) => {
  const response = await YoutubeService.getRelatedVideos(relatedToVideoId);
  const relatedVideos = response.result.items;

  return {
    payload: { relatedVideos },
    type: types.YOUTUBE_RELATED_VIDEOS,
  };
};

export const youtubeDetailVideo = async (idVideo) => {
  const response = await YoutubeService.getStatistics(idVideo);
  const detailVideo = response.result.items[0];

  return {
    payload: { detailVideo },
    type: types.YOUTUBE_STADISTIC_VIDEOS,
  };
};
