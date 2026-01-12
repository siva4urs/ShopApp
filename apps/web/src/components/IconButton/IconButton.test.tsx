import React from 'react'
import { render } from '@testing-library/react'
import IconButton from './index'

test('renders label', () => {
  const { getByText } = render(<IconButton label="OK" />)
  expect(getByText('OK')).toBeInTheDocument()
})
