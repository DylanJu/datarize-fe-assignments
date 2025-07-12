import type { Meta, StoryObj } from '@storybook/react'

import CustomerPurchases from './CustomerPurchases'
import { delay, http, HttpResponse } from 'msw'

import { mockCustomerPurchasesLong } from '../fixture'

const meta: Meta<typeof CustomerPurchases> = {
  title: 'components/CustomerPurchases',
  component: CustomerPurchases,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const 고객상세: Story = {
  args: {
    customerName: '홍길동',
    customerId: 1,
  },
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:4000/api/customers/1/purchases', async () => {
          return HttpResponse.json(mockCustomerPurchasesLong)
        }),
      ],
    },
  },
}

export const 로딩: Story = {
  args: {
    customerName: '홍길동',
    customerId: 1,
  },
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:4000/api/customers/1/purchases', async () => {
          await delay(3000)
          return HttpResponse.json(mockCustomerPurchasesLong)
        }),
      ],
    },
  },
}
