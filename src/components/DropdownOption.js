import styles from "../styles/dropdown_option.module.css";
// Will act as a dropdown option component which will be displayed once user hovering the dropdown button
// On clicking the dropdown option will close the dropdown options

function DropdownOption({ name }) {
  return (
    <div className={styles.dropdown_option}>
      <span className={styles.dropdown_option_name}>{name}</span>
    </div>
  );
}

export default DropdownOption;
