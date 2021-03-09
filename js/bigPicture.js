const POPUP = document.querySelector('.big-picture');
const POPUP_IMG = POPUP.querySelector('.big-picture__img img');
const POPUP_SOCIAL = POPUP.querySelector('.big-picture__social');
const POPUP_SOCIAL_HEADER = POPUP_SOCIAL.querySelector('.social__header');
const POPUP_SOCIAL_PICTURE = POPUP_SOCIAL_HEADER.querySelector('.social__picture');
const POPUP_SOCIAL_CAPTION = POPUP_SOCIAL_HEADER.querySelector('.social__caption');
const POPUP_SOCIAL_LIKES = POPUP_SOCIAL_HEADER.querySelector('.social__likes .likes-count');
const POPUP_COMMENS_COUNT = POPUP_SOCIAL.querySelector('.social__comment-count .comments-count');
const POPUP_SOCIAL_COMMENTS = POPUP_SOCIAL.querySelector('.social__comments');

const COMMENTS_LOADER = document.querySelector('.comments-loader ');
const SOCIAL_COMMENT_COUNT = document.querySelector('.social__comment-count');
const BODY = document.querySelector('body');

const POPUP_CANCEL = document.querySelector('.big-picture__cancel');
const TEMPLATE_FOR_ONE_COMMENT = document.querySelector('#social__comment').content;

/**
 * заполняем данными темплет для одного комента пользователя
 *
 * @param {*} data
 * @returns возращаем заполненный темплет
 */

const getComment = (data) => {
  const element = TEMPLATE_FOR_ONE_COMMENT.querySelector('.social__comment').cloneNode(true);
  const img = element.querySelector('.social__picture');
  const text = element.querySelector('.social__text');

  img.setAttribute('src', data.avatar);
  img.setAttribute('alt', data.name);
  text.textContent = data.message;

  return element;
}

/**заполняет темлеты в коробочку
 *
 * @param {*} comments
 * @returns возращает коробочку
 */

const getComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach(comment => {
    fragment.appendChild(getComment(comment));
  });

  return fragment;
}

/**
 * Заполняется разметка большой картинки  в том числе комментарии.
 * @param {*} data - объект данных картинки
 */

const fillBigPic = (data) => {
  POPUP_IMG.setAttribute('src', data.url);
  POPUP_IMG.setAttribute('alt', data.description);
  POPUP_SOCIAL_LIKES.textContent = data.likes;
  POPUP_SOCIAL_CAPTION.textContent = data.author.message;
  POPUP_SOCIAL_PICTURE.setAttribute('src', data.author.avatar);
  POPUP_SOCIAL_PICTURE.setAttribute('alt', data.author.name);
  POPUP_COMMENS_COUNT.textContent = data.comments.length;
  POPUP_SOCIAL_COMMENTS.textContent = '';
  POPUP_SOCIAL_COMMENTS.appendChild(getComments(data.comments)); // добавляем в DOM темлеты коментов

}

const closeHandler = () => {
  POPUP.classList.add('hidden');
  BODY.classList.remove('modal-open');
  COMMENTS_LOADER.classList.remove('hidden');
  SOCIAL_COMMENT_COUNT.classList.remove('hidden');
}

/**
 * Получает объект данных картинки и вызывает функцию заполнения его данными.
 * Показывает попап большой картинки, добавляю обработчик закрытия.
 * @param {*} data - приходит объект данных картинки  одной
 */

const openPopup = (data) => {
  fillBigPic(data); //добавили содержание в том числе коменты к большой картинке.
  POPUP.classList.remove('hidden');
  POPUP_CANCEL.addEventListener('click', closeHandler);
  BODY.classList.add('modal-open');
  COMMENTS_LOADER.classList.add('hidden');
  SOCIAL_COMMENT_COUNT.classList.add('hidden');
}

/**
 * Генератор обработчика вызова клика по превью.
 * На вход получает массив данных картинок, возращает обработчик вызова.
 * В обработчике данные доступны через замыкание.
 * Обработчик вычисляет id картинки, находит в массиве подходящий объект,
 * вызывает функцию отображения попап с этими данными.
 *
 * @param {*} pictures - массив объектов данных картинок.
 * @returns - обработчик клика по превью. Полная информация по картинке.
 */

const getObjectDataPic = pictures => (evt) => {

  if (evt.target.classList.contains('picture__img')) {
    const element = evt.target;
    const id = element.getAttribute('data-id'); // получили id картинки
    const photo = pictures.find(picture => picture.id === Number(id)); // получили объект данных картинки

    openPopup(photo);
  }

}
//6 level

const UPLOAD_FILE = document.querySelector('#upload-file');
const UPLOAD_FILE_CANCEL = document.querySelector('.img-upload__cancel');
const UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');



UPLOAD_FILE_CANCEL.addEventListener('click', function () {
  UPLOAD_OVERLAY.classList.add('hidden');
  BODY.classList.remove('modal-open');
  // COMMENTS_LOADER.classList.remove('hidden');
  // SOCIAL_COMMENT_COUNT.classList.remove('hidden');
});

UPLOAD_FILE_CANCEL.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    //evt.preventDefault();
    UPLOAD_OVERLAY.classList.add('hidden');
    BODY.classList.remove('modal-open');
  }
});
UPLOAD_FILE.addEventListener('change', function () {
  UPLOAD_OVERLAY.classList.remove('hidden');
  BODY.classList.add('modal-open');
});


const IMG_UPLOAD_EFFECT_LEVEL = document.querySelector('.img-upload__effect-level');
const SLIDER_ELEMENT = IMG_UPLOAD_EFFECT_LEVEL.querySelector('.effect-level__slider');
const UP_SCALE = document.querySelector('.scale__control--bigger');
const DOWN_SCALE = document.querySelector('.scale__control--smaller');
const SCALE_VALUE = document.querySelector('.scale__control--value');

const IMG_UPLOAD_PREVIEW = document.querySelector('.img-upload__preview');

const IMG_UPLOAD_EFFECTS = document.querySelector('.img-upload__effects');
const EFFECTS_LIST = IMG_UPLOAD_EFFECTS.querySelector('.effects__list');

const EFFECT_NONE = EFFECTS_LIST.querySelector('.effects__item #effect-none');
const EFFECT_CHROME = EFFECTS_LIST.querySelector('.effects__item #effect-chrome');
const EFFECT_SEPIA = EFFECTS_LIST.querySelector('.effects__item #effect-sepia');
const EFFECT_MARVIN = EFFECTS_LIST.querySelector('.effects__item #effect-marvin');
const EFFECT_PHOBOS = EFFECTS_LIST.querySelector('.effects__item #effect-phobos');
const EFFECT_HEAT = EFFECTS_LIST.querySelector('.effects__item #effect-heat');


/* global noUiSlider:readonly */
noUiSlider.create(SLIDER_ELEMENT, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
})

EFFECT_CHROME.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
});

EFFECT_SEPIA.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
});

EFFECT_MARVIN.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }
});

EFFECT_PHOBOS.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
});

EFFECT_HEAT.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
});
//===============================================================================
EFFECT_NONE.addEventListener('click', function () {

  SLIDER_ELEMENT.noUiSlider.on('update', () => {
    IMG_UPLOAD_PREVIEW.style.filter = 'none';

  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--sepia',
    'effects__preview--marvin', 'effects__preview--phobos');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--none');
});


EFFECT_SEPIA.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'sepia(1)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `sepia(${values[handle]})`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--sepia');
});

EFFECT_CHROME.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'grayscale(1)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `grayscale(${values[handle]})`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--chrome');
});

EFFECT_MARVIN.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'invert(100%)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `invert(${values[handle]}%)`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--phobos');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--marvin');
});

EFFECT_PHOBOS.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'blur(3px)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `blur(${values[handle]}px)`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--phobos');
});

EFFECT_HEAT.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'brightness(3)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `brightness(${values[handle]})`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--phobos', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--heat');
});

//=======================================
let counter = 100;
SCALE_VALUE.value = counter + '%';

UP_SCALE.addEventListener('click', function () {
  if (counter <= 99) {

    counter += 25;
    SCALE_VALUE.value = counter + '%';

    IMG_UPLOAD_PREVIEW.style.transform = `scale(0.${counter})`;
    if (counter == 100) {
      IMG_UPLOAD_PREVIEW.style.transform = 'scale(1)';
    }
  }

});

DOWN_SCALE.addEventListener('click', function () {
  if (counter >= 26) {
    counter -= 25;
    SCALE_VALUE.value = counter + '%';
    IMG_UPLOAD_PREVIEW.style.transform = `scale(0.${counter})`;
  }

});
//===========================================

export {
  getObjectDataPic

};
