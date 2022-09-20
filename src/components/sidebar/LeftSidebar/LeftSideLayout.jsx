import React from "react";

import BodyWrapper from "../BodyWrapper";
import { NavSidebar } from "./LeftNavSidebar";
import "../styles.css";

export const DashboardLayout = ({ children }) => {
  return (
    <BodyWrapper>
      <div id="box" className="flex h-screen bg-gray-200">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflowY-scroll overflowX-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box "
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
