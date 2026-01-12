import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './index'

test('renders and click works', () => {
  const onClick = vi.fn()
  const { getByText } = render(<Button onClick={onClick}>Click</Button>)
  fireEvent.click(getByText('Click'))
  expect(onClick).toHaveBeenCalled()
})
