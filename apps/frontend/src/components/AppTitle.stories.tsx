import type { Meta, StoryObj } from '@storybook/react-vite'

import AppTitle from './AppTitle'

const meta = {
  title: 'components/AppTitle',
  component: AppTitle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppTitle>

export default meta
type Story = StoryObj<typeof meta>

export const 기본: Story = {}
