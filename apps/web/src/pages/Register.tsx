import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Register</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        <TextField placeholder="Full name" value={name} onChange={setName} />
        <TextField placeholder="Email" value={email} onChange={setEmail} />
        <TextField placeholder="Password" value={password} onChange={setPassword} type="password" />
        <Button onClick={() => alert('Register not implemented')}>Create account</Button>
      </div>
    </div>
  )
}
