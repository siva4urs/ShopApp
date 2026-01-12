import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Login</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        <TextField placeholder="Email" value={email} onChange={setEmail} />
        <TextField placeholder="Password" value={password} onChange={setPassword} type="password" />
        <Button onClick={() => alert('Login not implemented')}>Login</Button>
      </div>
    </div>
  )
}
