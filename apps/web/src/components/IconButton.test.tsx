import React from 'react'
import { render } from '@testing-library/react'
import IconButton from './IconButton'

test('renders label', () => {
  const { getByText } = render(<IconButton label="OK" />)
  expect(getByText('OK')).toBeInTheDocument()
})
