import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/navbar/CategoriesBar.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCategoryBarList } from "../../utils/getCategoryBarList";

const CategoriesBar = () => {
  const navigate = useNavigate();
  const notify = () => toast.info("Dropdown feature is under construction!",{autoClose:2000});
  const onClickOfNavList = (e) => {
    if (!e.target.innerText) {
      notify();
      return;
    }
    navigate(`filter/${e.target.id}`);
  };
  const arrayOfListItems = getCategoryBarList();
  return (
    <div className={styles.categoriesBar}>
      <ul>
        {arrayOfListItems.map(({ term, category }, i) => {
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
