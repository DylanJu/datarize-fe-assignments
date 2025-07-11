import type { Meta, StoryObj } from '@storybook/react-vite'

import { within, expect } from '@storybook/test'

import PurchaseFrequency from './PurchaseFrequency'

const meta = {
  title: 'component/PurchaseFrequency',
  component: PurchaseFrequency,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    purchaseFrequency: [
      { range: '0 - 20000', count: 3 },
      { range: '20001 - 30000', count: 44 },
      { range: '30001 - 40000', count: 50 },
      { range: '40001 - 50000', count: 10 },
      { range: '50001 - 60000', count: 10 },
      { range: '60001 - 70000', count: 10 },
      { range: '70001 - 80000', count: 100 },
      { range: '80001 - 90000', count: 0 },
      { range: '90001 - 100000', count: 1 },
      { range: '100001 - 110000', count: 10 },
    ],
  },
} satisfies Meta<typeof PurchaseFrequency>

export default meta
type Story = StoryObj<typeof meta>

export const 데이터_있음: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('유저는 0 - 20000 은 2만원 이하로 볼 수 있어요.', () => {
      const purchaseFrequencyElement = canvas.getByText(/~2만원/i)
      expect(purchaseFrequencyElement).toBeInTheDocument()
    })

    await step('유저는 2만원 이상 제품은 n만원대로 나눠 볼 수 있어요.', () => {
      const purchaseFrequencyElement = canvas.getByText(/2만원대/i)
      expect(purchaseFrequencyElement).toBeInTheDocument()
      const purchaseFrequencyElement2 = canvas.getByText(/4만원대/i)
      expect(purchaseFrequencyElement2).toBeInTheDocument()
      const purchaseFrequencyElement3 = canvas.getByText(/5만원대/i)
      expect(purchaseFrequencyElement3).toBeInTheDocument()
      const purchaseFrequencyElement4 = canvas.getByText(/6만원대/i)
      expect(purchaseFrequencyElement4).toBeInTheDocument()
      const purchaseFrequencyElement5 = canvas.getByText(/7만원대/i)
      expect(purchaseFrequencyElement5).toBeInTheDocument()
      const purchaseFrequencyElement6 = canvas.getByText(/8만원대/i)
      expect(purchaseFrequencyElement6).toBeInTheDocument()
      const purchaseFrequencyElement7 = canvas.getByText(/9만원대/i)
      expect(purchaseFrequencyElement7).toBeInTheDocument()
    })

    await step('유저는 10만원 이상 제품은 10만원~ 으로 볼 수 있어요.', () => {
      const purchaseFrequencyElement = canvas.getByText(/10만원~/i)
      expect(purchaseFrequencyElement).toBeInTheDocument()
    })
  },
}

export const 데이터_없음: Story = {
  args: {
    purchaseFrequency: [],
  },
}
