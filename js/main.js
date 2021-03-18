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

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((wizards) => {
    placePictures(wizards);

    // const IMG_FILTERS=document.querySelector('.img-filters');
    // IMG_FILTERS.classList.remove('hidden');
  });

setUserFormSubmit(ClosePopupAfterSubmit);
