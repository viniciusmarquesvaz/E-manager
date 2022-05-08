import loading from "../../img/loading.svg";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.LoaderContainer}>
      <div className={styles.loader}></div>;
    </div>
  );
}

export default Loading;
