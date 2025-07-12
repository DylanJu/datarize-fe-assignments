import type { Meta, StoryObj } from '@storybook/react-vite'

import Loader from './Loader'

const meta = {
  title: 'components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const 로더: Story = {}
