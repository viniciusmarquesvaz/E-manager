import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.LoaderContainer}>
      <div className={styles.loader}></div>;
    </div>
  );
};

export default Loading;
