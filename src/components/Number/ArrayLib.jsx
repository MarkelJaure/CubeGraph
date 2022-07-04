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
          acc + (curr.time < timesPlayer2[index].time ? 1 : 0),
        0
      );
    } else {
      return timesPlayer2.reduce(
        (acc, curr, index) =>
          acc + (curr.time > timesPlayer1[index].time ? 1 : 0),
        0
      );
    }
  }
  return 0;
};
