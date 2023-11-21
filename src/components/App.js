// Internal dependent files required to run the App component
import styles from "../styles/app.module.css";
import Dropdown from "./Dropdown";
import { DROP_DOWN_OPTIONS } from "../utils";

// App component which is the higher level parent component used to render the Dropdown component
// This component getting dropdown options as props and passes the props to the required components
function App() {
  // Generating a JSX object which will be rendered as HTML defines the APP component
  return (
    <div className={styles.app}>
      {/* Place the dropdown components at center of the app */}
      <Dropdown dropdownOptions={DROP_DOWN_OPTIONS} />
    </div>
  );
}

export default App;
