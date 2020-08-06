const COMPLETED = 'completed';
const HOT_TASK = 'hot_task';
const MORE_TIME = 'more_time';
const TIME_HAS_COME_TASK = 'time_has_come_task';

export default function makeClass(date, completed) {
  const dateNow = new Date().getTime();
  const dateTodo = new Date(date).getTime();
  const diffDays = Math.floor(Math.abs(dateTodo - dateNow) / (1000 * 3600 * 24));
  switch (true) {
    case (completed):
      return (COMPLETED);
    case (dateNow > dateTodo || diffDays === 0):
      return (HOT_TASK);
    case (diffDays === 1):
      return (TIME_HAS_COME_TASK);
    case (diffDays > 1):
      return (MORE_TIME);
    default:
      return (HOT_TASK);
  }
}
