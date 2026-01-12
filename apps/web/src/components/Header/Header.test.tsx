import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'
import { MemoryRouter } from 'react-router-dom'

test('renders brand', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  expect(getByText('ShopApp')).toBeInTheDocument()
})
