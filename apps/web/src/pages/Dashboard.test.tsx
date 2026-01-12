import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: { query: ("query Products { products { id name price } }") as any },
    result: { data: { products: [{ id: '1', name: 'X', price: 1 }] } }
  }
]

test('renders products list', async () => {
  const { findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dashboard />
    </MockedProvider>
  )
  expect(await findByText('Products')).toBeInTheDocument()
})
