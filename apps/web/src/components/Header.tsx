import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
      <h2 style={{ margin: 0 }}>ShopApp</h2>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}
