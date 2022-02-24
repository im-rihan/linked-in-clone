import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./widgets.css";

function Widgets() {
  const widgetsArticlce = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgetsArticle_left">
          <FiberManualRecord />
        </div>
        <div className="widgetsArticle_right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {/* widgets article */}
      {widgetsArticlce("Rihan Mohammed", "from 2019-2022")}
      {widgetsArticlce("Rihan Mohammed", "from 2019-2022")}
      {widgetsArticlce("Rihan Mohammed", "from 2019-2022")}
      {widgetsArticlce("Rihan Mohammed", "from 2019-2022")}
      {widgetsArticlce("Rihan Mohammed", "from 2019-2022")}
    </div>
  );
}

export default Widgets;
