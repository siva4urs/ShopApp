import React from 'react'
import { render } from '@testing-library/react'
import Register from './Register'

test('renders register form', () => {
  const { getByPlaceholderText, getByText } = render(<Register />)
  expect(getByPlaceholderText('Full name')).toBeInTheDocument()
  expect(getByText('Create account')).toBeInTheDocument()
})
