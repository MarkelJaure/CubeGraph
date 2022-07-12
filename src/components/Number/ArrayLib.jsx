export const getPB = (listOfTimes) => {
  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);

  var bestTime = Math.min(
    ...listWithoutDNFs.map((item) => item.time + (item.plus2 ? TWO_SECONDS : 0))
  );

  var bestPB = listWithoutDNFs.find(
    (aTime) => aTime.time + (aTime.plus2 ? TWO_SECONDS : 0) === bestTime
  );
  return bestPB;
};

export const getMedia = (listOfTimes) => {
  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);

  return (
    Math.trunc(
      listWithoutDNFs.reduce(
        (prev, curr) => prev + (curr.time + (curr.plus2 ? TWO_SECONDS : 0)),
        0
      ) /
        listWithoutDNFs.length /
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
          acc + (comparationOfTime(timesPlayer1[index], curr) === 1 ? 1 : 0),
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
  var realTime1 = aTime1.time + (aTime1.plus2 ? TWO_SECONDS : 0);
  var realTime2 = aTime2.time + (aTime2.plus2 ? TWO_SECONDS : 0);
  if (realTime1 < realTime2) {
    return 1;
  }
  if (realTime1 > realTime2) {
    return -1;
  }
  return 0;
};

export const getListWithoutDNFs = (listOfTimes) => {
  return listOfTimes.filter((time) => {
    return !time.dnf;
  });
};

export const TWO_SECONDS = 2000;
