import type { Meta, StoryObj } from '@storybook/react-vite'

import { within, expect, userEvent } from '@storybook/test'

import PurchaseFrequencySection from './PurchaseFrequencySection'
import { http, HttpResponse } from 'msw'
import { mockPurchaseFrequency } from '../fixture'

const meta = {
  title: 'component/sections/PurchaseFrequencySection',
  component: PurchaseFrequencySection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PurchaseFrequencySection>

export default meta
type Story = StoryObj<typeof meta>

export const 데이터_있음: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:4000/api/purchase-frequency', async () => {
          return HttpResponse.json(mockPurchaseFrequency)
        }),
      ],
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('유저는 0 - 20000 은 2만원 이하로 볼 수 있어요.', async () => {
      const PurchaseFrequencySectionElement = await canvas.findByText(/~2만원/i)
      expect(PurchaseFrequencySectionElement).toBeInTheDocument()
    })

    await step('유저는 2만원 이상 제품은 n만원대로 나눠 볼 수 있어요.', async () => {
      const PurchaseFrequencySectionElement = await canvas.findByText(/2만원대/i)
      expect(PurchaseFrequencySectionElement).toBeInTheDocument()
      const PurchaseFrequencySectionElement2 = await canvas.findByText(/4만원대/i)
      expect(PurchaseFrequencySectionElement2).toBeInTheDocument()
      const PurchaseFrequencySectionElement3 = await canvas.findByText(/5만원대/i)
      expect(PurchaseFrequencySectionElement3).toBeInTheDocument()
      const PurchaseFrequencySectionElement4 = await canvas.findByText(/6만원대/i)
      expect(PurchaseFrequencySectionElement4).toBeInTheDocument()
      const PurchaseFrequencySectionElement5 = await canvas.findByText(/7만원대/i)
      expect(PurchaseFrequencySectionElement5).toBeInTheDocument()
      const PurchaseFrequencySectionElement6 = await canvas.findByText(/8만원대/i)
      expect(PurchaseFrequencySectionElement6).toBeInTheDocument()
      const PurchaseFrequencySectionElement7 = await canvas.findByText(/9만원대/i)
      expect(PurchaseFrequencySectionElement7).toBeInTheDocument()
    })

    await step('유저는 10만원 이상 제품은 10만원~ 으로 볼 수 있어요.', async () => {
      const PurchaseFrequencySectionElement = await canvas.findByText(/10만원~/i)
      expect(PurchaseFrequencySectionElement).toBeInTheDocument()
    })
  },
}

export const 데이터_없음: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:4000/api/purchase-frequency', async ({ request }) => {
          const url = new URL(request.url)
          const from = url.searchParams.get('from')
          const to = url.searchParams.get('to')

          if (from === '2024-07-01' && to === '2024-07-30') {
            return HttpResponse.json(mockPurchaseFrequency)
          }

          return HttpResponse.json([])
        }),
      ],
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('유저는 진입시 데이터를 정상적으로 볼 수 있어요.', async () => {
      const PurchaseFrequencySectionElement = await canvas.findByText(/~2만원/i)
      expect(PurchaseFrequencySectionElement).toBeInTheDocument()
    })

    await step('유저는 날짜를 변경하면 빈 차트를 볼 수 있어요.', async () => {
      const fromInput = await canvas.findByLabelText(/시작일/i)
      await userEvent.clear(fromInput)
      await userEvent.type(fromInput, '2024-08-01')

      const toInput = await canvas.findByLabelText(/종료일/i)
      await userEvent.clear(toInput)
      await userEvent.type(toInput, '2024-08-31')

      expect(canvas.queryByText(/~2만원/i)).not.toBeInTheDocument()
    })
  },
}
