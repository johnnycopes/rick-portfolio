import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from "../styles/components/header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.left}>
        <Link className={`${styles.item} ${styles.name}`}
          to="/"
          >
          <span className="accent">Rick</span> Segal
       </Link>
        <span className={`${styles.item} ${styles.item__divider}`}>
          |
        </span>
        <a className={`${styles.item} ${styles.icon}`}
          href="mailto:risegal4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
        <a className={`${styles.item} ${styles.icon}`}
          href="https://www.linkedin.com/in/rsegal"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a className={`${styles.item} ${styles.icon}`}
          href="https://www.instagram.com/riiyaack/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a className={`${styles.item} ${styles.icon}`}
          href="https://twitter.com/seinfeld2000?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
      </nav>
      <nav className={styles.right}>
        <Link className={styles.item}
          to="/work"
          >
          work
       </Link>
        <Link className={styles.item}
          to="/about"
          >
          about
        </Link>
        <Link className={`${styles.item} ${styles.item__misc}`}
          to="/misc"
          >
          <img className={styles.bird}
            src="assets/img/seagull.png"
            alt="misc"
          />
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
