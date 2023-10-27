import {getRandomInteger} from './util.js';
import {createRandomIdfromInteger} from './util.js';

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

const getComment = () => {
  const createCommentId = createRandomIdfromInteger(0, 9999);
  const createCommentAvatarId = createRandomIdfromInteger(1, 6);
  const commentMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const commentNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id: createCommentId(),
    avatarId: `img/avatar-${createCommentAvatarId()}.svg`,
    message: MESSAGES[commentMessageIndex],
    name: NAMES[commentNameIndex],
  };
};

const getPhoto = () => {
  const createObjectId = createRandomIdfromInteger(1, 25);
  const createObjectURL = createRandomIdfromInteger(1, 25);
  const descrPhotoIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const createLikes = createRandomIdfromInteger(15, 200);
  return {
    id: createObjectId(),
    url: `photos/${createObjectURL()}.jpg`,
    description: DESCRIPTIONS[descrPhotoIndex],
    like: createLikes(),
    comment: getComment(),
  };
};

const getSeveralPhotos = () => Array.from({length: 25}, getPhoto);

export {getSeveralPhotos};
