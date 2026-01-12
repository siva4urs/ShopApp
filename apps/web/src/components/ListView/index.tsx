import React from 'react'
import styles from './ListView.module.scss'

export default function ListView({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>
}
