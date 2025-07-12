import type { Meta, StoryObj } from '@storybook/react-vite'

import CustomersSection from './CustomersSection'
import { http, HttpResponse } from 'msw'

import { mockCustomerPurchasesShort, mockCustomers } from '../fixture'

const meta = {
  title: 'component/sections/CustomersSection',
  component: CustomersSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomersSection>

export default meta
type Story = StoryObj<typeof meta>

export const 고객목록: Story = {
  parameters: {
    msw: {
      handlers: [
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
