import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const { width } = useWindowSize();

  const { search, setSearch } = useContext(DataContext);

  return (
    <header>
      <div className={`${styles.header} container`}>
        <Link to="/">
          <h1 className={styles.title}>React Blog App</h1>
        </Link>
        <div className={styles.actions}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-post">Add Post</Link>
              </li>
              <li>
                <Link to="/readme">Readme</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="device-icon">
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
    </header>
  );
}

export default Header;
