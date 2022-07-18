import { TWO_SECONDS } from "./Constants";
import data from "../../scrambles.json";

export const getTimeWithPlus2 = (time) => {
  return time.time + (time.plus2 ? TWO_SECONDS : 0);
};

export const getRandomScramble = () => {
  return data.scrambles[Math.floor(Math.random() * data.scrambles.length)];
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
  var realTime1 = getTimeWithPlus2(aTime1);
  var realTime2 = getTimeWithPlus2(aTime2);
  if (realTime1 < realTime2) {
    return 1;
  }
  if (realTime1 > realTime2) {
    return -1;
  }
  return 0;
};
