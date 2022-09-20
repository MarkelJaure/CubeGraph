import React from "react";

import BodyWrapper from "../BodyWrapper";
import { RightSidebar } from "./RightNavSidebar";
import "../styles.css";
export const RightDashboardLayout = (props) => {
  return (
    <BodyWrapper>
      <div id="box" className="flex h-screen bg-gray-200">
        <RightSidebar
          actualAvg5={props.actualAvg5}
          bestAvg5={props.bestAvg5}
          animateAvg5={props.animateAvg5}
          actualAvg12={props.actualAvg12}
          bestAvg12={props.bestAvg12}
          animateAvg12={props.animateAvg12}
          actualAvg50={props.actualAvg50}
          bestAvg50={props.bestAvg50}
          animateAvg50={props.animateAvg50}
          actualAvg100={props.actualAvg100}
          bestAvg100={props.bestAvg100}
          animateAvg100={props.animateAvg100}
          pb={props.pb}
          animatePb={props.animatePb}
          media={props.media}
          animateMedia={props.animateMedia}
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
