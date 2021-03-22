/* global _:readonly */
import {
  placePictures
} from './picture.js';

import {
  setUserFormSubmit,
  closePopupAfterSubmit
} from './disign-photo.js'

const RERENDER_DELAY = 500;
const PICTURES_MAX_QUANTITY = 10;
const imgFilterContainer = document.querySelector('.img-filters');
const imgFilterForm = imgFilterContainer.querySelector('.img-filters__form');
const filterDefault = imgFilterForm.querySelector('#filter-default');
const filterRandom = imgFilterForm.querySelector('#filter-random');
const filterDiscussed = imgFilterForm.querySelector('#filter-discussed');
imgFilterContainer.classList.remove('img-filters--inactive');

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    placePictures(photos);

    const getfilterDefault = function () {
      placePictures(photos);
    }

    const getfilterRandom = function () {
      let getCallbackForSortMethod = () => Math.floor(Math.random() * 3) - 1;
      const messageCopy = photos.slice();
      const resultSort = messageCopy.sort(getCallbackForSortMethod).slice(0, PICTURES_MAX_QUANTITY);
      return placePictures(resultSort);
    }

    const getfilterDiscussed = function () {
      const methodSlice = photos.slice();
      const resultSort = methodSlice.sort(function (photosA, photosB) {
        return photosB.comments.length - photosA.comments.length
      }).slice(0, 10);
      return placePictures(resultSort);
    }

    filterDefault.addEventListener('click', _.debounce(getfilterDefault, RERENDER_DELAY), true);
    filterRandom.addEventListener('click', _.debounce(getfilterRandom, RERENDER_DELAY), true);
    filterDiscussed.addEventListener('click', _.debounce(getfilterDiscussed, RERENDER_DELAY), true);

  });

setUserFormSubmit(closePopupAfterSubmit);
