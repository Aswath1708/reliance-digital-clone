import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      <ul>
        <li>
          MOBILES & TABLETS
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          TELEVISIONS
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          AUDIO
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          HOME APPLIANCES
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          COMPUTERS
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          CAMERAS
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          KITCHEN APPLIANCES
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          PERSONAL CARE
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          ACCESSORIES
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
      </ul>
    </div>
  );
};

export default CategoriesBar;
