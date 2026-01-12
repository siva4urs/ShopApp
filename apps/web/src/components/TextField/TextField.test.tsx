import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextField from './index'

test('renders and allows input', () => {
  const handle = vi.fn()
  const { getByPlaceholderText } = render(<TextField placeholder="Email" value="" onChange={handle} />)
  const input = getByPlaceholderText('Email') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'test@example.com' } })
  expect(handle).toHaveBeenCalled()
})
