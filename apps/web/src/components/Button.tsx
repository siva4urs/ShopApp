import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, onClick, variant = 'primary' }: Props) {
  const style = {
    padding: '8px 16px',
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#2563eb' : '#e5e7eb',
    color: variant === 'primary' ? '#fff' : '#111'
  }
  return (
    <button style={style as React.CSSProperties} onClick={onClick}>
      {children}
    </button>
  )
}
