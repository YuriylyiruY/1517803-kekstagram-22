/* global noUiSlider:readonly */
import {
  getPass,

  getWarning

} from './util.js';

const IS_VALID_HASHTAG_REGEXP = /^#[\wа-яА-ЯЁё]{1,19}$/;
const TAGS_COUNT_MAX = 5;
const COMMENT_AUTOR_LENGTH_MAX = 140;
const uploadFile = document.querySelector('#upload-file');
const uploadFileCancel = document.querySelector('.img-upload__cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const hashtag = document.querySelector('.text__hashtags');
const textComentAutor = document.querySelector('.text__description');
const formSubmit = document.querySelector('.img-upload__form');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = imgUploadEffectLevel.querySelector('.effect-level__slider');
const upScale = document.querySelector('.scale__control--bigger');
const downScale = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreviw = document.querySelector('.img-upload__preview');
const imgUploadEffect = document.querySelector('.img-upload__effects');
const effectList = imgUploadEffect.querySelector('.effects__list');
const effectNone = effectList.querySelector('.effects__item #effect-none');
const effectChrome = effectList.querySelector('.effects__item #effect-chrome');
const effectSepia = effectList.querySelector('.effects__item #effect-sepia');
const effectMarvin = effectList.querySelector('.effects__item #effect-marvin');
const effectPhobos = effectList.querySelector('.effects__item #effect-phobos');
const effectHeat = effectList.querySelector('.effects__item #effect-heat');
const effectSlider = document.querySelector('.effect-level__slider');
const imgUploadLabel = document.querySelector('.img-upload__label');
effectSlider.classList.add('hidden');


uploadFileCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
});

const closeModalWindow = function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {

    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

hashtag.addEventListener('focus', () => {
  body.removeEventListener('keydown',closeModalWindow,false);

}, true);
hashtag.addEventListener('blur', () => {
  body.addEventListener('keydown',closeModalWindow,false);

}, true);

textComentAutor.addEventListener('focus', () => {
  body.removeEventListener('keydown',closeModalWindow,false);

}, true);
textComentAutor.addEventListener('blur', () => {
  body.addEventListener('keydown',closeModalWindow,false);

}, true);

body.addEventListener('keydown', closeModalWindow, false);

uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

});

noUiSlider.create(sliderElement, {
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

effectChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
});

effectSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
});

effectMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }
});

effectPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
});

effectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
});

imgUploadLabel.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', () => {
    imgUploadPreviw.style.filter = 'none';
    effectSlider.classList.add('hidden');
  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--sepia',
    'effects__preview--marvin', 'effects__preview--phobos');
  imgUploadPreviw.classList.add('effects__preview--none');
});

imgUploadLabel.addEventListener('click', function () {

  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.set(100);

});

effectNone.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', () => {
    imgUploadPreviw.style.filter = 'none';
    effectSlider.classList.add('hidden');
  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--sepia',
    'effects__preview--marvin', 'effects__preview--phobos');
  imgUploadPreviw.classList.add('effects__preview--none');
});

effectSepia.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = 'sepia(1)';
    imgUploadPreviw.style.filter = `sepia(${values[handle]})`;
    effectSlider.classList.remove('hidden');

  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');
  imgUploadPreviw.classList.add('effects__preview--sepia');

});

effectChrome.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = 'grayscale(1)';
    imgUploadPreviw.style.filter = `grayscale(${values[handle]})`;
    effectSlider.classList.remove('hidden');

  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');
  imgUploadPreviw.classList.add('effects__preview--chrome');
});

effectMarvin.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = 'invert(100%)';
    imgUploadPreviw.style.filter = `invert(${values[handle]}%)`;
    effectSlider.classList.remove('hidden');

  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--phobos');
  imgUploadPreviw.classList.add('effects__preview--marvin');
});

effectPhobos.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = 'blur(20px)';
    imgUploadPreviw.style.filter = `blur(${values[handle]}px)`;
    effectSlider.classList.remove('hidden');

  });
  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');
  imgUploadPreviw.classList.add('effects__preview--phobos');
});

effectHeat.addEventListener('click', function () {
  scaleValue.value = 100 + '%';
  imgUploadPreviw.style.transform = 'scale(1)';
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = 'brightness(20)';
    imgUploadPreviw.style.filter = `brightness(${values[handle]})`;
    effectSlider.classList.remove('hidden');

  });
  imgUploadPreviw.classList.remove('effects__preview--phobos', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');
  imgUploadPreviw.classList.add('effects__preview--heat');
});

let counter = 100;
scaleValue.value = counter + '%';

upScale.addEventListener('click', function () {

  if (counter <= 99) {
    counter += 25;
    scaleValue.value = counter + '%';
    imgUploadPreviw.style.transform = `scale(0.${counter})`;
    if (counter === 100) {
      imgUploadPreviw.style.transform = 'scale(1)';
    }
  }
});

downScale.addEventListener('click', function () {
  if (counter >= 26) {
    counter -= 25;
    scaleValue.value = counter + '%';
    imgUploadPreviw.style.transform = `scale(0.${counter})`;
  }
});

const checkHashtag = (str) => !IS_VALID_HASHTAG_REGEXP.test(str);

const checkHashtags = (str) => {
  if (str.length === 0) {
    return false;
  }

  const tags = str.toLowerCase().split(' ');
  if (tags.length > TAGS_COUNT_MAX) {
    return `не больше ${TAGS_COUNT_MAX} хештегов`;
  }

  const invalidhashtag = tags.find(checkHashtag);
  if (invalidhashtag) {
    return ` Тег невалиден ${invalidhashtag}`;
  }

  const uniqueTags = new Set(tags);
  if (uniqueTags.size !== tags.length) {
    return 'Теги не должны дублироваться';
  }
  return false;
}

const handlehashtagsChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = checkHashtags(value);
  element.setCustomValidity(error || '');
  element.reportValidity();
}

hashtag.addEventListener('input', handlehashtagsChange);

const checkCommentText = (str) => {
  if (str.length === 0) {
    return false;
  }
  if (str.length > COMMENT_AUTOR_LENGTH_MAX) {
    return `Длина строки не должна превышать ${COMMENT_AUTOR_LENGTH_MAX} символов`;
  }
}

const handleCommentTextChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = checkCommentText(value);
  element.setCustomValidity(error || '');
  element.reportValidity();
}

textComentAutor.addEventListener('input', handleCommentTextChange);

const closePopupAfterSubmit = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
}

const setUserFormSubmit = (onSuccess) => {
  formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://22.javascript.pages.academy/kekstagram', {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          formSubmit.reset();
          getPass();


        } else {
          getWarning();
        }
      })
      .catch(() => {
        getWarning();

      });
  });
};

export {
  handlehashtagsChange,
  closePopupAfterSubmit,
  setUserFormSubmit
}
