import React from "react";

import BodyWrapper from "../BodyWrapper";
import { RightSidebar } from "./RightNavSidebar";
import "../styles.css";

export const RightDashboardLayout = (props) => {
  return (
    <BodyWrapper>
      <div id="box" className="flex h-screen bg-gray-200">
        <RightSidebar />

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
