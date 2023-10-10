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
