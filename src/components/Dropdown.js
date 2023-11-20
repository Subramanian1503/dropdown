import styles from "../styles/dropdown.module.css";
import {useState } from "react";

// This is a class or a functional component which will show the dropdown options on hovering it.
// Will close the dropdown when a option of the dropdown is clicked
// Will get the required options for dropdown as arguments and not to be harcoded

function Dropdown() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onAway = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.dropdown_button_container}
      onMouseOverCapture={onHover}
      onMouseOutCapture={onAway}
    >
      <div className={styles.dropdown_button}>
        {/* text in the button */}
        <span className={styles.button_name}>Select</span>

        {/* down arrow to click */}
        <span>
          {hover ? (
            <img
              className={styles.dropdown_toggle_down_arrow}
              src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
              alt="down-arrow"
            ></img>
          ) : (
            <img
              className={styles.dropdown_toggle_left_arrow}
              src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png"
              alt="left-arrow"
            ></img>
          )}
        </span>
      </div>
    </div>
  );
}

export default Dropdown;
