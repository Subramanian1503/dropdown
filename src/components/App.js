import styles from "../styles/app.module.css";
import Dropdown from "./Dropdown";

function App() {
  return (
    <div className={styles.app}>
      {/* Place the dropdown components at center of the app */}
      <Dropdown />
    </div>
  );
}

export default App;
