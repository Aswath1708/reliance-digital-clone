import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesBar = () => {
  const navigate = useNavigate();
  const onClickOfNavList = (e) => {

    navigate(`filter/${e.target.id}`);
    // console.log(e.target.childNodes[0].data);
  };
  const arrayOfListItems = [
    {term:"MOBILES & TABLETS",category:"tablet"},
    {term:"TELEVISIONS",category:"tv"},
    {term:"AUDIO",category:"audio"},
    {term:"HOME APPLIANCES",category:"appliances"},
    {term:"COMPUTERS",category:"laptop"},
    {term:"CAMERAS"},
    {term:"KITCHEN APPLIANCES",category:"kitchenappliances"},
    {term:"PERSONAL CARE",category:"health"},
    {term:"ACCESSORIES",category:"travel"}
  ];
  return (
    <div className="categories-bar">
      <ul>
        {arrayOfListItems.map(({term,category}, i) => {
          return (
            <li key={i} onClick={onClickOfNavList} id={category}>
              {term}
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesBar;
