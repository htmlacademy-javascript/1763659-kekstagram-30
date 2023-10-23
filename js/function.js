// Функция трансформации часов в минуты
function convertHoursToMinute(str) {
  let [hours, minutes] = str.split(':');
  return (+hours * 60) + (+minutes);
}
// Трансформируем часы в минуты и записываем в массив
function dataInput (startDay, endDay, eventStart, duration) {
  const timeInMinutes = [startDay, endDay, eventStart].map((minutes) => convertHoursToMinute(minutes));
  const startDayInMin = timeInMinutes[0];
  const endDayInMin = timeInMinutes[1];
  const eventStartInMin = timeInMinutes[2];

// Проверяем условие
  return endDayInMin >= startDayInMin &&
    eventStartInMin >= startDayInMin &&
    eventStartInMin <= endDayInMin &&
    eventStartInMin + duration <= endDayInMin;
}
