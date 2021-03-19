/* global _:readonly */
import {
  placePictures
} from './picture.js';

import {
  setUserFormSubmit,
  ClosePopupAfterSubmit
} from './disign-photo.js'

const imgFilterContainer = document.querySelector('.img-filters');
const imgFilterForm = imgFilterContainer.querySelector('.img-filters__form');
const filterDefault = imgFilterForm.querySelector('#filter-default');
const filterRandom = imgFilterForm.querySelector('#filter-random');
const filterDiscussed = imgFilterForm.querySelector('#filter-discussed');
imgFilterContainer.classList.remove('img-filters--inactive');
const RERENDER_DELAY = 500;

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    placePictures(photos);

    filterDiscussed.onclick = (_.debounce(() => {
      const methodSlice = photos.slice();
      const resultSort = methodSlice.sort(function (photosA, photosB) {
        return photosB.comments.length - photosA.comments.length
      }).slice(0, 10);
      return placePictures(resultSort);
    }, RERENDER_DELAY));

    filterRandom.onclick = (_.debounce(() => {
      let callbackForSortMethod = () => Math.floor(Math.random() * 3) - 1;
      const messageCopy = photos.slice();
      const PICTURES_MAX_QUANTITY = 10;
      const resultSort = messageCopy.sort(callbackForSortMethod).slice(0, PICTURES_MAX_QUANTITY);
      return placePictures(resultSort);
    }, RERENDER_DELAY));

    filterDefault.onclick = (_.debounce(() => {
      placePictures(photos);
    }, RERENDER_DELAY));
  });

setUserFormSubmit(ClosePopupAfterSubmit);
