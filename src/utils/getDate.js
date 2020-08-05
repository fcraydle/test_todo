export default function getDate() {
  const d = new Date();
  let day = d.getDate();
  day = (day < 10) ? `0${day}` : day;
  let month = d.getMonth() + 1;
  month = (month < 10) ? `0${month}` : month;
  const year = d.getFullYear();
  let hours = d.getHours();
  hours = (hours < 10) ? `0${hours}` : hours;
  let minutes = d.getMinutes();
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  return (`${year}-${month}-${day}T${hours}:${minutes}`);
}
