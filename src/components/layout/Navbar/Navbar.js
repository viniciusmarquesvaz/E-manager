import { Link } from "react-router-dom";

import Container from "../Container/Container";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.logoContainer}>
          <span className={styles.glimmer}>
            <a className={styles.logo} href="/">
              E-project
            </a>
          </span>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
