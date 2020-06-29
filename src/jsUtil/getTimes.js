let Dates = "";
let times = "";
let arr = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
function calcMonth(month) {
  return arr[month];
}

export default {
  calcTimes() {
    let year = new Date().getUTCFullYear();
    let month = calcMonth(new Date().getUTCMonth());
    let date = new Date().getDate();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    Dates = `${year}-${month}-${date}`;
    times = `${hour}:${minutes}`;
    return { Dates, times };
  },
};
