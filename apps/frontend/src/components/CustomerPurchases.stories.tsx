import type { Meta, StoryObj } from '@storybook/react'

import CustomerPurchases from './CustomerPurchases'
import { http, HttpResponse } from 'msw'

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
          return HttpResponse.json([
            {
              date: '2024-07-01',
              product: '청바지',
              price: 50000,
              quantity: 1,
              imgSrc: 'http://localhost:4000/imgs/bluejeans.jpg',
            },
            {
              date: '2024-07-02',
              product: '티셔츠',
              price: 20000,
              quantity: 2,
              imgSrc: 'http://localhost:4000/imgs/tshirts.jpg',
            },
            {
              date: '2024-07-03',
              product: '자켓',
              price: 70000,
              quantity: 0,
              imgSrc: 'http://localhost:4000/imgs/jackets.jpg',
            },
            {
              date: '2024-07-04',
              product: '스웨터',
              price: 45000,
              quantity: 10,
              imgSrc: 'http://localhost:4000/imgs/sweater.jpg',
            },
            {
              date: '2024-07-05',
              product: '셔츠',
              price: 35000,
              quantity: 5,
              imgSrc: 'http://localhost:4000/imgs/shirt.jpg',
            },
            {
              date: '2024-07-06',
              product: '코트',
              price: 100000,
              quantity: 4,
              imgSrc: 'http://localhost:4000/imgs/coat.jpg',
            },
            {
              date: '2024-07-07',
              product: '반바지',
              price: 30000,
              quantity: 1,
              imgSrc: 'http://localhost:4000/imgs/shorts.jpg',
            },
            {
              date: '2024-07-08',
              product: '후드티',
              price: 40000,
              quantity: 1,
              imgSrc: 'http://localhost:4000/imgs/hoodie.jpg',
            },
            {
              date: '2024-07-08',
              product: '원피스',
              price: 60000,
              quantity: 2,
              imgSrc: 'http://localhost:4000/imgs/dress.jpg',
            },
            {
              date: '2024-07-08',
              product: '맨투맨',
              price: 38000,
              quantity: 9,
              imgSrc: 'http://localhost:4000/imgs/sweatshirt.jpg',
            },
          ])
        }),
      ],
    },
  },
}
