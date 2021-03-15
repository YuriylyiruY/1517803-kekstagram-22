//6 level

const UPLOAD_FILE = document.querySelector('#upload-file');
const UPLOAD_FILE_CANCEL = document.querySelector('.img-upload__cancel');
const UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');
const BODY = document.querySelector('body');

UPLOAD_FILE_CANCEL.addEventListener('click', function () {
  UPLOAD_OVERLAY.classList.add('hidden');
  BODY.classList.remove('modal-open');

});

UPLOAD_FILE_CANCEL.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
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
  IMG_UPLOAD_PREVIEW.style.filter = 'blur(20px)';

  SLIDER_ELEMENT.noUiSlider.on('update', (values, handle) => {
    IMG_UPLOAD_PREVIEW.style.filter = `blur(${values[handle]}px)`;
  });

  IMG_UPLOAD_PREVIEW.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');

  IMG_UPLOAD_PREVIEW.classList.add('effects__preview--phobos');
});

EFFECT_HEAT.addEventListener('click', function () {
  IMG_UPLOAD_PREVIEW.style.filter = 'brightness(20)';

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
//level 6.2
const HASHTAG = document.querySelector('.text__hashtags');
const TEXT_COMENT_AUTOR = document.querySelector('.text__description');
// хэш-тег начинается с символа # (решётка);
// строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
//    спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// хеш-тег не может состоять только из одной решётки;
// максимальная длина одного хэш-тега 20 символов, включая решётку;
// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;
// хэш-теги необязательны;

// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;
// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.


const IS_VALID_HASHTAG_REGEXP = /^#[\wа-яА-ЯЁё]{1,19}$/;
const TAGS_COUNT_MAX = 5;
const COMMENT_AUTOR_LEIGTH_MAX = 140;

/**
 * Провалидировать хештег по следующим требованиям:
 * хэш-тег начинается с символа # (решётка);
 * строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
 *   спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
 * хеш-тег не может состоять только из одной решётки;
 * максимальная длина одного хэш-тега 20 символов, включая решётку;
 * хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
 *
 * @param {*} str
 * @returns
 */
const validateHashtag = (str) => !IS_VALID_HASHTAG_REGEXP.test(str);

/**
 * Разбить строку по пробелам, в цикле вызвать валидатор для подстроки,
 * если подстрока не валидная то прервать цикл и вернуть текст ошибки.
 *
 * Если всё ок вернуть false.
 *
 * 1. один и тот же хэш-тег не может быть использован дважды;
 * 2. нельзя указать больше пяти хэш-тегов;
 * 3. хэш-теги необязательны;
 * @param {*} str
 * @returns
 */
const validateHashtags = (str) => {
  // 3 правило
  if (str.length === 0) {
    return false;
  }

  const tags = str.toLowerCase().split(' ');

  if (tags.length > TAGS_COUNT_MAX) {
    return `не больше ${TAGS_COUNT_MAX} хештегов`;
  }

  const invalidHashtag = tags.find(validateHashtag);

  if (invalidHashtag) {
    return ` Тег невалиден ${invalidHashtag}`;
  }

  const uniqueTags = new Set(tags);

  if (uniqueTags.size != tags.length) {
    return 'Теги не должны дублироваться';
  }

  return false;
}

const handleHashtagsChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = validateHashtags(value);

  element.setCustomValidity(error || '');
  element.reportValidity();
}

HASHTAG.addEventListener('input', handleHashtagsChange);

const validateHashtags1 = (str) => {
  // 3 правило
  if (str.length === 0) {
    return false;
  }

  if (str.length > COMMENT_AUTOR_LEIGTH_MAX) {
    return `Длина строки не должна превышать ${COMMENT_AUTOR_LEIGTH_MAX} символов`;
  }
}

const handleHashtagsChange1 = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = validateHashtags1(value);

  element.setCustomValidity(error || '');
  element.reportValidity();
}

TEXT_COMENT_AUTOR.addEventListener('input', handleHashtagsChange1);


export {
  handleHashtagsChange
}
