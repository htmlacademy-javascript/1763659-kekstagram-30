const NAMES = [
  'Liam',
  'Noah',
  'Oliver',
  'James',
  'Elijah',
  'William',
  'Henry',
  'Lucas',
  'Benjamin',
  'Theodore',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Не похоже на закат у моря.',
  'Кажется это медведь в лесу.',
  'Михалыч, завязывай.',
  'Моя бабушка читает газету — Жизнь.',
  'Кораблекрушение',
];
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
}
/**
 * получение случайного значения из диапазона
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

const getComments = () => {
  const createCommentId = createRandomIdfromInteger(0, 9999);
  const createCommentAvatarId = createRandomIdfromInteger(1, 6);
  const createCommentMessage = getRandomInteger(0, MESSAGES.length - 1);
  const createCommentName = getRandomInteger(0, NAMES.length - 1);

  return {
    id: createCommentId(),
    avatarId: `img/avatar-${createCommentAvatarId()}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const getObject = () => {
  const createObjectId = createRandomIdfromInteger(1, 25);
  const createObjectURL = createRandomIdfromInteger(1, 25);
  const createObjectDescription = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const createLikes = createRandomIdfromInteger(15, 200);

  return {
    id: createObjectId(),
    url: 'photos/' + createObjectURL() + '.jpg',
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    like: createLikes(),
    comment: getComments(),
  };
};

const severalObjects = Array.from({length: 25}, getObject);
console.log(severalObjects);
