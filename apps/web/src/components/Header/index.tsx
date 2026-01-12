import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.root}>
      <h2 className={styles.brand}>ShopApp</h2>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}
