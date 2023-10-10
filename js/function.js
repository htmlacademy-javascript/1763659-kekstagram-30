// Проверка длинны строки
function getStringLength(string, maxLength) {
  return string.length <= maxLength;
}
  console.log(getStringLength('asdadasda3', 20));


// Проверка на полиндром
const strSource = 'Лёша на полке клопа нашёл';
const strClean = strSource.toLowerCase().replaceAll(' ', '');
console.log(strClean);

function strReverse() {
  return strClean.split('').reverse().join('');
}
console.log(strReverse(strClean));

function getStringCompare(strClean, strReverse) {
  return strClean === strReverse();
}
console.log(getStringCompare(strClean, strReverse));


// Возврат целого положительного числа
function getNumber(strRandom) {
  let result = '';
  for (let i = 0; i <= strRandom.length - 1; i++) {
    const strNumber = parseInt(strRandom[i], 10);
    if (!isNaN(strNumber)) {
      result += strNumber;
    }
  }
  if(result === '') {
    return NaN;
  }
  return result;
}
console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));

// Функция извлечения цифр от 0 до 9
// Возврат в виде положительного числа
// Если в строке нет цифр, функция должна вернуть NaN;
