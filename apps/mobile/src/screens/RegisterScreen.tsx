import React, { useState } from 'react'
import { View, Text } from 'react-native'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function RegisterScreen({ onNavigate }: any) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Register</Text>
      <View style={{ gap: 12 }}>
        <TextField placeholder="Full name" value={name} onChange={setName} />
        <TextField placeholder="Email" value={email} onChange={setEmail} />
        <TextField placeholder="Password" value={password} onChange={setPassword} secure />
        <Button onPress={() => alert('Register not implemented')}>Create account</Button>
        <Button variant="secondary" onPress={() => onNavigate('login')}>Back to login</Button>
      </View>
    </View>
  )
}
