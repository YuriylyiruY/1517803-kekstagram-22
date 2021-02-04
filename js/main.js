//task 1
const randomNum = function repeat(fromNum, toNum) {
  try {
    let rand = fromNum + (Math.random() * (toNum));
    if (fromNum <= rand && toNum >= rand) {
      return Math.floor(rand).toString();
    } else if (fromNum > toNum) {
      let between = fromNum;
      fromNum = toNum;
      toNum = between;
      return repeat(fromNum, toNum);
    } else if (fromNum == toNum) {
      return Math.floor(toNum).toString();
    }
  } catch (err) {
    return (err);
  }


}
let min;
let max;
randomNum(min, max);

// function func(x) {
//   alert(x);
// }

//task 2
const strLenght = function (str, maxLenght) {

  if (str.length > maxLenght) {
    return false;
  } else {
    return true;
  }

}
let str;
let maxLenght;
strLenght(str, maxLenght);
