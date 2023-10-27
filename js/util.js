/**
 * получение целого числа из диапазона
 * @param {int} min — минимальное значение
 * @param {int} max — максимальное значение
 * @return {int} — целое число
 */
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export {getRandomInteger};

/**
 * получение случайного значения из диапазона целых чисел;
 * @param {int} min — минимальное значение
 * @param {int} max — максимальное значение
 * @return {int} — случайное число
 */
function createRandomIdfromInteger (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {createRandomIdfromInteger};
