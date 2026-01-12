import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

export function renderWithProviders(ui: React.ReactElement, { mocks = [], route = '/' } = {}) {
  return {
    wrapper: ({ children }: any) => (
      <MemoryRouter initialEntries={[route]}>
        <MockedProvider mocks={mocks} addTypename={false}>{children}</MockedProvider>
      </MemoryRouter>
    ),
    ui
  }
}
