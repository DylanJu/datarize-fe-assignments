import type { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'

import { mockCustomerPurchasesShort, mockCustomers, mockPurchaseFrequency } from './fixture'

import App from './App'

const meta = {
  title: 'components/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

let retry = 0

export const 구매빈도_에러: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:4000/api/purchase-frequency', async () => {
          if (retry === 0) {
            retry++
            return new HttpResponse(new Error('Failed to fetch purchase frequency'), { status: 500 })
          }
          return HttpResponse.json(mockPurchaseFrequency)
        }),
        http.get('http://localhost:4000/api/customers', async () => {
          return HttpResponse.json(mockCustomers)
        }),
        http.get('http://localhost:4000/api/customers/:id/purchases', async () => {
          return HttpResponse.json(mockCustomerPurchasesShort)
        }),
      ],
    },
  },
}
