import React from 'react'

export default function IconButton({ onClick, label }: { onClick?: () => void; label?: string }) {
  return (
    <button onClick={onClick} style={{ padding: 8, borderRadius: 8, border: '1px solid #ddd', background: 'white' }}>
      {label || '⋯'}
    </button>
  )
}
