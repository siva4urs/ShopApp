import React from 'react'

type Props = {
  value?: string
  onChange?: (v: string) => void
  placeholder?: string
  type?: string
}

export default function TextField({ value = '', onChange, placeholder = '', type = 'text' }: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', width: '100%' }}
    />
  )
}
