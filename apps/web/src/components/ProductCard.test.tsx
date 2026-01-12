import React from 'react'
import { render } from '@testing-library/react'
import ProductCard from './ProductCard'

const p = { id: '1', name: 'Test', price: 9.99 }

test('renders product', () => {
  const { getByText } = render(<ProductCard product={p} />)
  expect(getByText('Test')).toBeInTheDocument()
  expect(getByText('$9.99')).toBeInTheDocument()
})
