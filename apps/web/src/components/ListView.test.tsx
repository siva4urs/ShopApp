import React from 'react'
import { render } from '@testing-library/react'
import ListView from './ListView'

test('renders children', () => {
  const { getByText } = render(<ListView><div>Child</div></ListView>)
  expect(getByText('Child')).toBeInTheDocument()
})
