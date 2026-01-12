import React, { useState } from 'react'
import { View, Text } from 'react-native'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function LoginScreen({ onNavigate }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Login</Text>
      <View style={{ gap: 12 }}>
        <TextField placeholder="Email" value={email} onChange={setEmail} />
        <TextField placeholder="Password" value={password} onChange={setPassword} secure />
        <Button onPress={() => alert('Login not implemented')}>Login</Button>
        <Button variant="secondary" onPress={() => onNavigate('register')}>Create account</Button>
      </View>
    </View>
  )
}
