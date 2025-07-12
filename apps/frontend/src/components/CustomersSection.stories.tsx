import type { Meta, StoryObj } from '@storybook/react-vite'

import CustomersSection from './CustomersSection'
import { http, HttpResponse } from 'msw'

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
          return HttpResponse.json([
            { id: 5, name: '최민수', count: 6, totalAmount: 420000 },
            { id: 3, name: '이철수', count: 8, totalAmount: 400000 },
            { id: 2, name: '김영희', count: 10, totalAmount: 468000 },
            { id: 6, name: '오준호', count: 6, totalAmount: 225000 },
            { id: 7, name: '한지우', count: 8, totalAmount: 220000 },
            { id: 11, name: '김하늘', count: 6, totalAmount: 400000 },
            { id: 9, name: '윤서영', count: 9, totalAmount: 330000 },
            { id: 16, name: '장민석', count: 6, totalAmount: 325000 },
            { id: 4, name: '박지민', count: 4, totalAmount: 134000 },
            { id: 13, name: '서지영', count: 5, totalAmount: 220000 },
            { id: 10, name: '이서진', count: 4, totalAmount: 175000 },
            { id: 1, name: '홍길동', count: 9, totalAmount: 740000 },
            { id: 14, name: '전하늘', count: 7, totalAmount: 215000 },
            { id: 8, name: '권상우', count: 4, totalAmount: 300000 },
            { id: 12, name: '조은비', count: 8, totalAmount: 289000 },
            { id: 17, name: '배윤서', count: 6, totalAmount: 195000 },
            { id: 20, name: '송지우', count: 9, totalAmount: 352000 },
            { id: 18, name: '강호준', count: 7, totalAmount: 580000 },
            { id: 15, name: '이상우', count: 9, totalAmount: 560000 },
            { id: 19, name: '문지환', count: 8, totalAmount: 270000 },
          ])
        }),
      ],
    },
  },
}
