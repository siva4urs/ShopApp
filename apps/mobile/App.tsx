import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import DashboardScreen from './src/screens/DashboardScreen'

export default function App() {
  const [route, setRoute] = useState('dashboard')
  const navigate = (r: string) => setRoute(r)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      {route === 'login' && <LoginScreen onNavigate={navigate} />}
      {route === 'register' && <RegisterScreen onNavigate={navigate} />}
      {route === 'dashboard' && <DashboardScreen />}
      <Footer />
    </SafeAreaView>
  )
}
