import { getLocal, setLocal } from './localstorage';
import { FAV_VIDEOS } from './constants';

export class FavoriteProcess {
  PROCESS_TYPE = { ADD: 'ADD', REMOVE: 'REMOVE' };

  constructor(singleVideo) {
    this.isLogin = false;
    this.videos = getLocal(FAV_VIDEOS);
    this.singleVideo = singleVideo;
    this.videoProcess = '';
  }

  addOrRemoveVideo() {
    if (this.videos) {
      let videoMatch;
      let indexMatch;
      this.videos.forEach((video, index) => {
        if (video.id === this.singleVideo.id) {
          videoMatch = video;
          indexMatch = index;
        }
      });
      if (!videoMatch) {
        this.videos.push(this.singleVideo);
        this.videoProcess = this.PROCESS_TYPE.ADD;
      } else {
        this.videos.splice(indexMatch, 1);
        this.videoProcess = this.PROCESS_TYPE.REMOVE;
      }
    } else {
      this.videos = [];
      this.videos.push(this.singleVideo);
      this.videoProcess = this.PROCESS_TYPE.ADD;
    }
    return this;
  }

  updateLocalStorage() {
    setLocal(FAV_VIDEOS, this.videos);
    return this;
  }

  displayMessage() {
    // eslint-disable-next-line no-alert
    alert(this.videoProcess === this.PROCESS_TYPE.ADD ? 'Video added' : 'Video removed');
    return this;
  }
}
