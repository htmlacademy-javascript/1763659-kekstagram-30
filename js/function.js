// Проверка длинны строки
function getStringLength(string, maxLength) {
  return string.length <= maxLength;
}
  console.log(getStringLength('asdadasda3', 20));

// Проверка на полиндром
const stringSource = 'Лёша на полке клопа нашёл';
let stringClean = stringSource.toLowerCase().replaceAll(' ', '');
  console.log(stringClean);

let charAmount = stringClean.length - 1;
  for (let i = charAmount; i > 0; i--) {
    console.log(stringClean[i]);
let
