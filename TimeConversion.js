function timeConversion(s) {
  let time = s.split(":");
  let hours = parseInt(time[0]);
  let amPm = time[2];
  if (amPm.indexOf("AM") != -1 && hours == 12) {
    time[0] = "00";
  }
  if (amPm.indexOf("PM") != -1 && hours < 12) {
    time[0] = hours + 12;
  }
  return time.join(":").replace(/(AM|PM)/, "");
}
