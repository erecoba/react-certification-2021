import * as types from '../types';

export const initialState = {
  videos: [],
};

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.YOUTUBE_GET_VIDEOS: {
      return {
        ...state,
        videos: action.payload.videos,
      };
    }

    case types.YOUTUBE_SEARCH_VIDEOS: {
      return {
        ...state,
        videos: action.payload.videos,
      };
    }

    default:
      return state;
  }
};

export default youtubeReducer;
