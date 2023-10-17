/*
В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.


1. Структура каждого обьекта:
– id обьекта, сгенерированное полож. число от 1 до 25 (не повторяются);
- url обьекта, строка — адрес картинки вида photos/{{i}}.jpg,
где {{i}} — это число от 1 до 25. (не повторяются);
– description, строка — описание фотографии. Описание придумайте самостоятельно.
– likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200;
– comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются
случайным образом. Пример описания объекта с комментарием:
*/

/*
1.1 Структура комментария:
– id комментария - любое число (не повторяется);
– Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img..
— message — случайные комментарий из массива ниже:
- name - случайные именна из массива ниже;
*/


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

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdfromInteger (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const comment = () => {
  const createCommentId = createRandomIdfromInteger(0, 9999);
  const createCommentAvatarId = createRandomIdfromInteger(1, 6);
  const createCommentMessage = getRandomInteger(0, MESSAGES.length - 1);
  const createCommentName = getRandomInteger(0, NAMES.length - 1);

  return {
    id: createCommentId(),
    avatarId: 'img/avatar-' + createCommentAvatarId() + '.svg',
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const object = () => {
  const createObjectId = createRandomIdfromInteger(1, 25);
  const createObjectURL = createRandomIdfromInteger(1, 25);
  const createObjectDescription = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const createLikes = createRandomIdfromInteger(15, 200);

  return {
    id: createObjectId(),
    url: 'photos/' + createObjectURL() + '.jpg',
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    like: createLikes(),
    comment: comment(),
  };
};

const severalObjects = Array.from({length: 25}, object);
console.log(severalObjects);
