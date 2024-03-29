import { DNF_TIME, NULL_TIME } from "./Constants";
import { comparationOfTime, getTimeWithPlus2 } from "./SingleTimeUtil";

export const getPB = (listOfTimes) => {
  if (listOfTimes.length === 0) return null;

  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);

  var bestTime = Math.min(
    ...listWithoutDNFs.map((item) => getTimeWithPlus2(item))
  );

  return listWithoutDNFs.find((aTime) => getTimeWithPlus2(aTime) === bestTime);
};

export const getWorstTime = (listOfTimes) => {
  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);

  var worstTime = Math.max(
    ...listWithoutDNFs.map((item) => getTimeWithPlus2(item))
  );
  return listWithoutDNFs.find((aTime) => getTimeWithPlus2(aTime) === worstTime);
};

export const getMedia = (listOfTimes) => {
  if (listOfTimes.length === 0) return NULL_TIME;
  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);
  if (listWithoutDNFs.length === 0) return NULL_TIME;

  return (
    Math.trunc(
      listWithoutDNFs.reduce((prev, curr) => prev + getTimeWithPlus2(curr), 0) /
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

export const getListWithoutDNFs = (listOfTimes) => {
  return listOfTimes.filter((time) => {
    return !time.dnf;
  });
};

export const getCurrAvg = (aNumber, listOfTimes) => {
  return getAvg(aNumber, listOfTimes, listOfTimes.length - aNumber);
};

export const getBestAvg = (aNumber, listOfTimes) => {
  var avgsLength = listOfTimes.length - aNumber + 1;
  var avgs = [];

  if (avgsLength > 0) {
    for (var i = -1; i < avgsLength; i++) {
      var tmpAvg = getAvg(aNumber, listOfTimes, i);
      if (tmpAvg && tmpAvg >= -1) avgs.push(tmpAvg);
    }
    if (avgs.length > 0) return Math.min(...avgs);
    else return NULL_TIME;
  } else {
    return NULL_TIME;
  }
};

export const getAvg = (aNumber, listOfTimes, aStart) => {
  if (listOfTimes.length === 0) return NULL_TIME;
  if (aNumber > listOfTimes.length) return NULL_TIME;
  const lastElements = listOfTimes.slice(aStart, aStart + aNumber);
  var DNFs = countDNF(lastElements);
  if (DNFs >= 2) return DNF_TIME;

  var pb = getPB(lastElements);
  if (DNFs === 1) {
    var listWithoutDNFs = getListWithoutDNFs(lastElements);
    return getMedia(
      listWithoutDNFs.filter((time) => {
        return time !== pb;
      })
    );
  }
  var worstTime = getWorstTime(lastElements);

  return getMedia(
    lastElements.filter((time) => {
      return time !== pb && time !== worstTime;
    })
  );
};

const countDNF = (listOfTimes) => {
  return listOfTimes.filter((time) => {
    return time.dnf;
  }).length;
};

export const getStandardDeviation = (listOfTimes) => {
  var listWithoutDNFs = getListWithoutDNFs(listOfTimes);

  if (!listWithoutDNFs || listWithoutDNFs.length === 0) {
    return 0;
  }

  const n = listWithoutDNFs.length;
  const mean = getMedia(listWithoutDNFs);
  return (
    Math.round(
      Math.sqrt(
        listWithoutDNFs
          .map((x) => Math.pow(getTimeWithPlus2(x) - mean, 2))
          .reduce((a, b) => a + b) / n
      ) / 10
    ) * 10
  );
};
