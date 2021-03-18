import {
  placePictures
} from './picture.js';

import {
  setUserFormSubmit,
  ClosePopupAfterSubmit
} from './disignBigPictures.js'

/**
 * Для задания 6
 * 1. На input file повесить обработчик change
 * 2. Ограничить для инпут файлов типы файлов (гогле), только картинки
 * 3. В обработчике через evt.target.files[0] получить информацию о выбранном файле
 * 4. С помощью FileReader и readAsDataURL  получить содержимое картинки из файла в пункте 3
 * 5. Вставить содержимое картинки в атрибут src  соответствующего элемента формы
 * 6. Показать форму
 */
const imgFilterContainer = document.querySelector('.img-filters');
const imgFilterForm = imgFilterContainer.querySelector('.img-filters__form');
const filterDefault = imgFilterForm.querySelector('#filter-default');
const filterRandom = imgFilterForm.querySelector('#filter-random');
const filterDiscussed = imgFilterForm.querySelector('#filter-discussed');
imgFilterContainer.classList.remove('img-filters--inactive');

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((wizards) => {
    placePictures(wizards.slice(0, 10));

    filterDiscussed.onclick = () => {
      console.log('ggg');
      for (let i = 0; i < wizards.length; i++) {
        wizards[i].comments.sort(function (a, b) {
          return a - b;
        });
      }
    }


    filterRandom.onclick = () => {

      let callbackForSortMethod = () => Math.floor(Math.random() * 3) - 1; //получает значения -1,0,1 для метода sort

      const messageCopy = wizards.slice();
      const PICTURES_MAX_QUANTITY = 10;
      const resultSort = messageCopy.sort(callbackForSortMethod).slice(0, PICTURES_MAX_QUANTITY); // случайное колличество значений из заданного диапазона, которое нужно достать из массива
      return placePictures(resultSort);
    }

    filterDefault.onclick = () => {
      placePictures(wizards);
    }

  });

setUserFormSubmit(ClosePopupAfterSubmit);
