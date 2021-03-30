const URL = 'https://www.googleapis.com/youtube/v3';

export const getVideos = async () => {
  return window.gapi.client.request({
    path: `${URL}/videos`,
    params: { maxResults: 20, chart: 'mostPopular', part: 'snippet,statistics' },
  });
};

export const searchVideos = async (q) => {
  return window.gapi.client.request({
    path: `${URL}/search`,
    params: {
      q,
      maxResults: 20,
      chart: 'mostPopular',
      part: 'snippet',
      type: 'video',
    },
  });
};

export const getRelatedVideos = async (relatedToVideoId) => {
  return window.gapi.client.request({
    path: `${URL}/search`,
    params: {
      relatedToVideoId,
      part: 'snippet',
      type: 'video',
      maxResults: 20,
    },
  });
};

export const getStatistics = async (id) => {
  return window.gapi.client.request({
    path: `${URL}/videos`,
    params: {
      id,
      part: 'snippet,statistics',
    },
  });
};

export default () => ({
  getVideos,
  searchVideos,
  getRelatedVideos,
  getStatistics,
});
