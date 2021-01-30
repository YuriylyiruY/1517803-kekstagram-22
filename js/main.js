//task 1
const randomNum = function repeat(fromNum, toNum) {
  if (fromNum >= 0 && fromNum < toNum) {
    let rand = Math.random() * (toNum);

    if ((fromNum <= rand && toNum >= rand) && rand != 0) {
      alert(Math.floor(rand));
    } else {
      repeat(fromNum, toNum);
    }
  } else if (toNum - fromNum == 0) {

    alert(Math.floor(fromNum));
  } else {
    alert('неправильно введен диапазон');
  }
}

randomNum(prompt('Введите первое число'), prompt('Введите второе число'));

//task 2
const strLenght = function (str, maxLenght) {
  if (str.length > maxLenght) {
    alert('a lot of words, try again');
  } else {
    alert('dreamboat');
  }

}

strLenght(prompt('write something'), prompt('write maxLenght'));
