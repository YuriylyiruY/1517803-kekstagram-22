import {
  getPhotos
} from './data.js';

import {
  placePictures
} from './picture.js';

const PICTURE_COUNT = 25;
let DATA = getPhotos(PICTURE_COUNT);
placePictures(DATA);

/**
 * Для задания 6
 * 1. На input file повесить обработчик change
 * 2. Ограничить для инпут файлов типы файлов (гогле), только картинки
 * 3. В обработчике через evt.target.files[0] получить информацию о выбранном файле
 * 4. С помощью FileReader и readAsDataURL  получить содержимое картинки из файла в пункте 3
 * 5. Вставить содержимое картинки в атрибут src  соответствующего элемента формы
 * 6. Показать форму
 */
