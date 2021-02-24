// import {
//   picPhotos
// } from './fullpic.js';
// /* eslint-disable no-console */
// console.log(picPhotos);
// /* eslint-enable no-console */
import {
  getPhotos
} from './data.js';
import {
  renderPictures,placePictures
} from './picture.js';
/* eslint-disable no-console */
console.log(renderPictures);
/* eslint-enable no-console */

const PICTURE_COUNT = 25;
let PICTURES = getPhotos(PICTURE_COUNT);
placePictures(PICTURES);

