import React from 'react'
import styles from './Button.module.scss'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, onClick, variant = 'primary' }: Props) {
  return (
    <button className={`${styles.root} ${variant === 'primary' ? styles.primary : styles.secondary}`} onClick={onClick}>
      {children}
    </button>
  )
}
