import styles from "../styles/app.module.css";
import Dropdown from "./Dropdown";
import { DROP_DOWN_OPTIONS } from "../utils";

function App() {
  return (
    <div className={styles.app}>
      {/* Place the dropdown components at center of the app */}
      <Dropdown options={DROP_DOWN_OPTIONS} />
    </div>
  );
}

export default App;
