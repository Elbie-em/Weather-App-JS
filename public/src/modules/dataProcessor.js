const convertTime = (unixTimeStamp) => {
  const date = new Date(unixTimeStamp * 1000);
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const cDate = `${date.getHours()}:${minutes}`;
  return cDate;
};

const convertTemp = (temp) => {
  const unit = (temp * (9 / 5)) + 32;
  const conversion = Math.round(unit * 10) / 10;
  return conversion;
};

export {
  convertTime, convertTemp,
};