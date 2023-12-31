// React library dependencies required to construct the Dropdown Component
import { useState } from "react";

// Internal dependent files required to run the Dropdown component
import styles from "../styles/dropdown.module.css";
import DropdownOption from "./DropdownOption";

// This is a class or a functional component which will show the dropdown options on hovering it.
// Will close the dropdown when a option of the dropdown is clicked
// Will get the required options for dropdown as arguments and not to be harcoded

function Dropdown({ dropdownOptions, dropdownName }) {
  // Creating a state to capture the hovering event of the dropdown component
  const [isHovering, setIsHovering] = useState(false);

  // Defining the behavior while the dropdown is hovered
  const onHover = () => {
    // Setting to true since the mouse is hovering the button
    setIsHovering(true);
  };

  // Defining the behavior while the dropdown is away
  const onAway = () => {
    // Setting to false since the mouse is poinitng out of the button
    setIsHovering(false);
  };

  return (
    // Dropdown button container
    <div className={styles.dropdown_button_container}>
      {/* Dropdown button */}
      <div
        className={styles.dropdown_button}
        onMouseOverCapture={onHover}
        onMouseOutCapture={onAway}
      >
        {/* name of  the drop down button */}
        <span className={styles.button_name}>{dropdownName}</span>

        {/* toggling the arrows based on the mouse state */}
        <span>
          {isHovering ? (
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

      {/* dropdown options to be displayed while hovering */}
      {isHovering && (
        <ul
          className={`${styles.dropdown_option_list} ${styles.animation_effect}`}
          onMouseOverCapture={onHover}
          onMouseOutCapture={onAway}
        >
          {/* list of dropdown options that needs to be displayed */}
          {dropdownOptions.map((option) => (
            <li className={styles.dropdown_option} onClick={onAway}>
              <DropdownOption name={option} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Exporting the component so that it can be used by other components
export default Dropdown;
