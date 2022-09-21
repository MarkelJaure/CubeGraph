import React from "react";

import BodyWrapper from "../BodyWrapper";
import { RightSidebar } from "./RightNavSidebar";
import {
  getPB,
  getMedia,
  getBestAvg,
  getCurrAvg,
  getStandardDeviation,
} from "../../lib/ArrayTimesUtil";
import "../styles.css";
export const RightDashboardLayout = (props) => {
  return (
    <BodyWrapper>
      <div id="box" className="flex h-screen bg-gray-200">
        <RightSidebar
          actualAvg5={getCurrAvg(5, props.listOfTimes)}
          bestAvg5={getBestAvg(5, props.listOfTimes)}
          animateAvg5={true}
          actualAvg12={getCurrAvg(12, props.listOfTimes)}
          bestAvg12={getBestAvg(12, props.listOfTimes)}
          animateAvg12={true}
          actualAvg50={getCurrAvg(50, props.listOfTimes)}
          bestAvg50={getBestAvg(50, props.listOfTimes)}
          animateAvg50={true}
          actualAvg100={getCurrAvg(100, props.listOfTimes)}
          bestAvg100={getBestAvg(100, props.listOfTimes)}
          animateAvg100={true}
          pb={getPB(props.listOfTimes)}
          media={getMedia(props.listOfTimes)}
          animatePb={true}
          animateMedia={true}
          ed={getStandardDeviation(props.listOfTimes)}
          listOfTimes={props.listOfTimes}
        />

        <div className="flex flex-col flex-1 overflowY-scroll overflowX-hidden ">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              ></div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
