import React from 'react'
import styles from './IconButton.module.scss'

export default function IconButton({ onClick, label }: { onClick?: () => void; label?: string }) {
  return (
    <button onClick={onClick} className={styles.root}>
      {label || '⋯'}
    </button>
  )
}
