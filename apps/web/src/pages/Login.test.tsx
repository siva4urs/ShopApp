import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'

test('renders login form', () => {
  const { getByPlaceholderText, getByText } = render(<Login />)
  expect(getByPlaceholderText('Email')).toBeInTheDocument()
  expect(getByText('Login')).toBeInTheDocument()
})
