import youtubeReducer, { initialState } from './youtube';
import * as types from '../../types';

describe('State - Reducer - Youtube', () => {
  it('should execute YOUTUBE_GET_VIDEOS case', () => {
    const action = {
      type: types.YOUTUBE_GET_VIDEOS,
      payload: {
        videos: [1],
      },
    };
    const state = youtubeReducer(initialState, action);

    expect(state.videos).toHaveLength(1);
  });

  it('should execute YOUTUBE_SEARCH_VIDEOS case', () => {
    const action = {
      type: types.YOUTUBE_SEARCH_VIDEOS,
      payload: {
        videos: [1, 1],
      },
    };
    const state = youtubeReducer(initialState, action);

    expect(state.videos).toHaveLength(2);
  });

  it('should execute YOUTUBE_RELATED_VIDEOS case', () => {
    const action = {
      type: types.YOUTUBE_RELATED_VIDEOS,
      payload: {
        relatedVideos: [1],
      },
    };
    const state = youtubeReducer(initialState, action);

    expect(state.relatedVideos).toHaveLength(1);
  });

  it('should execute YOUTUBE_STADISTIC_VIDEOS case', () => {
    const action = {
      type: types.YOUTUBE_STADISTIC_VIDEOS,
      payload: {
        detailVideo: {},
      },
    };
    const state = youtubeReducer(initialState, action);

    expect(state.detailVideo).toBeTruthy();
  });

  it('should return same state when', () => {
    const action = {
      type: 'UNDEFINED_TYPE',
      payload: {
        videos: [1, 1],
        relatedVideos: [1],
        detailVideo: {},
      },
    };
    const state = youtubeReducer(undefined, action);

    expect(state.videos).toHaveLength(0);
    expect(state.relatedVideos).toHaveLength(0);
    expect(state.detailVideo).toBeTruthy();
  });
});
