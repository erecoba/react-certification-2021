import * as types from '../types';

export const initialState = {
  videos: [],
  relatedVideos: [],
  detailVideo: {},
};

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.YOUTUBE_GET_VIDEOS: {
      return {
        ...state,
        videos: action.payload.videos,
        relatedVideos: [],
        detailVideo: {},
      };
    }

    case types.YOUTUBE_SEARCH_VIDEOS: {
      return {
        ...state,
        videos: action.payload.videos,
        relatedVideos: [],
        detailVideo: {},
      };
    }

    case types.YOUTUBE_RELATED_VIDEOS: {
      return {
        ...state,
        relatedVideos: action.payload.relatedVideos,
      };
    }

    case types.YOUTUBE_STADISTIC_VIDEOS: {
      return {
        ...state,
        detailVideo: action.payload.detailVideo,
      };
    }

    default:
      return state;
  }
};

export default youtubeReducer;
