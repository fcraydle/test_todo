export default function makeClass(date, completed) {

  const dateNow = new Date().getTime();
  const dateTodo = new Date(date).getTime();
  const diffDays = Math.floor(Math.abs(dateTodo - dateNow) / (1000 * 3600 * 24));
  switch (true) {
    case (completed === true):
      return ('completed');
    case (dateNow > dateTodo || diffDays === 0):
      return ('hot_task');
    case (diffDays === 1):
      return ('time_has_come_task');
    case (diffDays > 1):
      return ('more_time');
    default:
      return ('hot_task');
  }
}
