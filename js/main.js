//task 1
const randomNum = function repeat(fromNum, toNum) {
  let rand = Math.random() * (toNum);
  if ((fromNum <= rand && toNum >= rand) && rand != 0) {
    return (Math.floor(rand));
  } else if (fromNum > toNum) {
    return alert('неправильно введен диапазон');
  } else if (fromNum > rand) {
    repeat(fromNum, toNum);
  }
}
let min;
let max;
randomNum(min, max);

//task 2
const strLenght = function (str, maxLenght) {
  if (str.length > maxLenght) {
    return alert('a lot of words, try again');
  } else {
    return str;
  }

}
let str;
const MAX_LENGHT = 9;
strLenght(str, MAX_LENGHT);
