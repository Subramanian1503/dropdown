import styles from "../styles/dropdown_option.module.css";
// Will act as a dropdown option component which will be displayed once user hovering the dropdown button
// On clicking the dropdown option will close the dropdown options

// Internal dependent files required to run the Dropdown component
function DropdownOption({ name }) {
  return (
    // dropdown option
    <div className={styles.dropdown_option}>
      {/* Content of the dropdown option */}
      <span className={styles.dropdown_option_name}>{name}</span>
    </div>
  );
}


// Exporting the component so that it can be used by other components
export default DropdownOption;
