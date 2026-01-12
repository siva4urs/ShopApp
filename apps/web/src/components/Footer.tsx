import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.root}>
      <small>© {new Date().getFullYear()} ShopApp</small>
    </footer>
  )
}
