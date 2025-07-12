import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import { useState } from 'storybook/internal/preview-api'
import { userEvent, within, expect, waitForElementToBeRemoved } from '@storybook/test'

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div style={{ padding: '2rem' }}>Hello, world!</div>,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>열기</button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('유저는 진입시 모달 컨텐츠를 볼 수 없어요.', () => {
      expect(canvas.queryByText('Hello, world!')).not.toBeInTheDocument()
    })

    await step('유저는 열기 버튼을 클릭하면 모달 컨텐츠를 볼 수 있어요.', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '열기' }))
      expect(await canvas.findByText('Hello, world!')).toBeInTheDocument()
    })

    await step('유저는 모달 바깥을 클릭해서 모달을 닫을 수 있어요.', async () => {
      await userEvent.click(canvas.getByTestId('modal-overlay'))
      await waitForElementToBeRemoved(() => canvas.queryByText('Hello, world!'))
    })
  },
}
