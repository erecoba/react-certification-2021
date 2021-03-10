/* istanbul ignore file */
import youtube from './youtube';

let singleton = null;

export default () => {
  if (!singleton) {
    singleton = {
      youtube: youtube(),
    };
  }

  return singleton;
};
