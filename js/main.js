import {
  getPhotos
} from './data.js';
//=================================
import {
  renderPicturesComments,
  renderPictures,
  placePictures,
  placePicturesComments
} from './picture.js';
//================================
import {
  getClicker
} from './bigPictures.js';
//=======================
import {
  getRandomTextFromArr
} from './util.js';
//=======================
const PICTURE_COUNT = 25;
let PICTURES = getPhotos(PICTURE_COUNT);
placePictures(PICTURES);
// const COMMENTS_COUNT = 2;
// const COMMENTS_COUNT_APPGRAIT=getRandomTextFromArr(COMMENTS_COUNT);
// let COMMENTS = getPhotos(COMMENTS_COUNT_APPGRAIT);
placePicturesComments(PICTURES);


const CONTAINER = document.querySelector('.pictures');
CONTAINER.addEventListener('click', getClicker);


export{PICTURES};
