import {
  DATEPHOTOS
} from './data.js';

const pool = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('a');
const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"

function getFetch() {

  for (let i = 1; i < DATEPHOTOS.length; i++) {
    const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
    element.classList.add('el-' + (i + 1));
    const temp = element.children;
    temp[0].setAttribute('src', `photos/${i}.jpg`);
    temp[1].children[0].textContent = DATEPHOTOS[i].picture__comment;
    temp[1].children[1].textContent = DATEPHOTOS[i].picture__likes;
    fragmentBox.appendChild(element);
  }
  pool.appendChild(fragmentBox);
}
getFetch();

let portToMain = pool.children;

export {
  portToMain
};
