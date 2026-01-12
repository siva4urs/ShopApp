import React from 'react'
import styles from './TextField.module.scss'

type Props = {
  value?: string
  onChange?: (v: string) => void
  placeholder?: string
  type?: string
}

export default function TextField({ value = '', onChange, placeholder = '', type = 'text' }: Props) {
  return (
    <input
      className={styles.root}
      type={type}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
