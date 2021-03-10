export const getVideos = async () => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/videos',
    params: { maxResults: 20, chart: 'mostPopular', part: 'snippet,statistics' },
  });
};

export const searchVideos = async (q) => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/search',
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
    path: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      relatedToVideoId,
      part: 'snippet',
      type: 'video',
      maxResults: 20,
    },
  });
};

export default () => ({
  getVideos,
  searchVideos,
  getRelatedVideos,
});
