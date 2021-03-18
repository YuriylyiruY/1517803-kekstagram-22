//6 level
import {showAlert,showPass} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadFileCancel = document.querySelector('.img-upload__cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

uploadFileCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

});

uploadFileCancel.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

});


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


/* global noUiSlider:readonly */
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
//===============================================================================
effectNone.addEventListener('click', function () {

  sliderElement.noUiSlider.on('update', () => {
    imgUploadPreviw.style.filter = 'none';

  });

  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--sepia',
    'effects__preview--marvin', 'effects__preview--phobos');

  imgUploadPreviw.classList.add('effects__preview--none');
});


effectSepia.addEventListener('click', function () {
  imgUploadPreviw.style.filter = 'sepia(1)';

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = `sepia(${values[handle]})`;
  });

  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--chrome', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');

  imgUploadPreviw.classList.add('effects__preview--sepia');
});

effectChrome.addEventListener('click', function () {
  imgUploadPreviw.style.filter = 'grayscale(1)';

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = `grayscale(${values[handle]})`;
  });

  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--marvin', 'effects__preview--phobos');

  imgUploadPreviw.classList.add('effects__preview--chrome');
});

effectMarvin.addEventListener('click', function () {
  imgUploadPreviw.style.filter = 'invert(100%)';

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = `invert(${values[handle]}%)`;
  });

  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--phobos');

  imgUploadPreviw.classList.add('effects__preview--marvin');
});

effectPhobos.addEventListener('click', function () {
  imgUploadPreviw.style.filter = 'blur(20px)';

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = `blur(${values[handle]}px)`;
  });

  imgUploadPreviw.classList.remove('effects__preview--heat', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');

  imgUploadPreviw.classList.add('effects__preview--phobos');
});

effectHeat.addEventListener('click', function () {
  imgUploadPreviw.style.filter = 'brightness(20)';

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreviw.style.filter = `brightness(${values[handle]})`;
  });

  imgUploadPreviw.classList.remove('effects__preview--phobos', 'effects__preview--sepia', 'effects__preview--none',
    'effects__preview--chrome', 'effects__preview--marvin');

  imgUploadPreviw.classList.add('effects__preview--heat');
});

//=======================================
let counter = 100;
scaleValue.value = counter + '%';

upScale.addEventListener('click', function () {
  if (counter <= 99) {

    counter += 25;
    scaleValue.value = counter + '%';

    imgUploadPreviw.style.transform = `scale(0.${counter})`;
    if (counter == 100) {
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
//===========================================
//level 6.2
const hashtag = document.querySelector('.text__hashtags');
const textComentAutor = document.querySelector('.text__description');
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


const isValidHashtagRegexp = /^#[\wа-яА-ЯЁё]{1,19}$/;
const tagsCountMax = 5;
const commentAutorLengthMax = 140;

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
const validatehashtag = (str) => !isValidHashtagRegexp.test(str);

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
const validatehashtags = (str) => {
  // 3 правило
  if (str.length === 0) {
    return false;
  }

  const tags = str.toLowerCase().split(' ');

  if (tags.length > tagsCountMax) {
    return `не больше ${tagsCountMax} хештегов`;
  }

  const invalidhashtag = tags.find(validatehashtag);

  if (invalidhashtag) {
    return ` Тег невалиден ${invalidhashtag}`;
  }

  const uniqueTags = new Set(tags);

  if (uniqueTags.size != tags.length) {
    return 'Теги не должны дублироваться';
  }

  return false;
}

const handlehashtagsChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = validatehashtags(value);

  element.setCustomValidity(error || '');
  element.reportValidity();
}

hashtag.addEventListener('input', handlehashtagsChange);

const validateCommentText = (str) => {
  // 3 правило
  if (str.length === 0) {
    return false;
  }

  if (str.length > commentAutorLengthMax) {
    return `Длина строки не должна превышать ${commentAutorLengthMax} символов`;
  }
}

const handleCommentTextChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const error = validateCommentText(value);

  element.setCustomValidity(error || '');
  element.reportValidity();
}

textComentAutor.addEventListener('input', handleCommentTextChange);

const formSubmit = document.querySelector('.img-upload__form');


const ClosePopupAfterSubmit = () => {

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
          onSuccess(); formSubmit.reset(); showPass('Форма отправлена');

        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};


export {
  handlehashtagsChange,
  ClosePopupAfterSubmit,
  setUserFormSubmit

}
