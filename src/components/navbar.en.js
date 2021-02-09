import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.scss"
import { useLocation } from "@reach/router"

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <ul>
            <li className={styles.name}>Philip Kuo</li>
            <li><Link to="/" activeClassName={styles.current}>About</Link></li>
            <li><Link to="/work" activeClassName={styles.current}>Work</Link></li>
            <li><Link to="/blog" activeClassName={styles.current}>Blog</Link></li>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.right}>
          <ul>
            <li><Link to={`${"/."}${pathname}`} className={styles.current}>EN</Link></li>
            <li><Link to={`${"/zh"}${pathname}`}>中</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}