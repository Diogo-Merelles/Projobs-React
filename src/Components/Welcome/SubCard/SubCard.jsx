import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SubCard = ({
  image = "",
  title = "",
  subTitle = "",
  activeRef = "",
}) => {
  return (
    <div>
      <img className="bottom-svg">{image}</img>
      <div className="subCard-title">{title}</div>
      <div className="subCard-subtitle">{subTitle}</div>
      <div className="subCard-ref">
        <p></p>
        {activeRef}
      </div>
    </div>
  );
};

export default SubCard;
