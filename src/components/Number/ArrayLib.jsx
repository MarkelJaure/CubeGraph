export const getPB = (listOfTimes) => {
  var bestTime = Math.min(...listOfTimes.map((item) => item.time));
  var bestPB = listOfTimes.find((aTime) => aTime.time === bestTime);
  return bestPB;
};

export const getMedia = (listOfTimes) => {
  return (
    Math.trunc(
      listOfTimes.reduce((prev, curr) => prev + curr.time, 0) /
        listOfTimes.length /
        10
    ) * 10
  );
};

export const getRoundsWin = (timesPlayer1, timesPlayer2) => {
  if (timesPlayer1 && timesPlayer2) {
    if (timesPlayer1.length <= timesPlayer2.length) {
      return timesPlayer1.reduce(
        (acc, curr, index) =>
          acc + (comparationOfTime(curr, timesPlayer2[index]) === 1 ? 1 : 0),
        0
      );
    } else {
      return timesPlayer2.reduce(
        (acc, curr, index) =>
          acc + (comparationOfTime(curr, timesPlayer1[index]) === 1 ? 1 : 0),
        0
      );
    }
  }
  return 0;
};

export const comparationOfTime = (aTime1, aTime2) => {
  if (aTime1.dnf && aTime2.dnf) {
    return 0;
  }
  if (aTime1.dnf) {
    return -1;
  }
  if (aTime2.dnf) {
    return 1;
  }
  var realTime1 = aTime1.time + (aTime1.plus2 ? 20 : 0);
  var realTime2 = aTime2.time + (aTime2.plus2 ? 20 : 0);
  if (realTime1 < realTime2) {
    return 1;
  }
  if (realTime1 > realTime2) {
    return -1;
  }
  return 0;
};
