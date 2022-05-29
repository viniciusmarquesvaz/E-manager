import styles from "./Home.module.css";
import savings from "../../../img/Data extraction.gif";
import LinkButton from "../../layout/LinkButton/LinkButton";
import Typist from "react-typist";
import { useState } from "react";

function Home() {
  const texts = [
    "Start managing your projects right now!",
    "easy and practical",
    "monitor and manage your environment",
  ];
  const [currentTextCounter, setCurrentTextCounter] = useState(0);

  return (
    <section className={styles.home_container}>
      <h1>
        <span className={styles.AnimationTitle}>Welcome</span> to the{" "}
        <span className={styles.blob}>Manager</span>
      </h1>
      <div
        onClick={() => {
          if (currentTextCounter < texts.length - 1) {
            setCurrentTextCounter(currentTextCounter + 1);
          }
        }}
      >
        <Typist className={styles.typerText} key={currentTextCounter}>
          {texts[currentTextCounter]}
          <Typist.Backspace count={texts} delay={200} />
        </Typist>
      </div>
      <br />
      <span className={styles.btnHome}>
        <LinkButton
          className={styles.btnHome}
          to="newProject"
          text="Create Project"
        />
      </span>

      <img src={savings} alt="Costs"></img>
    </section>
  );
}

export default Home;
