import {
  getPhotos
} from './data.js';
//=================================
import {
  renderPictures,
  placePictures
} from './picture.js';
//=================================
import {
  getPictures
} from './fullpic.js';

//=================================
const PICTURE_COUNT = 25;
let PICTURES = getPhotos(PICTURE_COUNT);
placePictures(PICTURES);
//================================



