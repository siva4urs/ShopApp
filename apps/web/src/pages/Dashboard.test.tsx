import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'
import { MockedProvider } from '@apollo/client/testing'
import { gql } from '@apollo/client'

const PRODUCTS_QUERY = gql`query Products { products { id name price } }`

const mocks = [
  {
    request: { query: PRODUCTS_QUERY },
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
